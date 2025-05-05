import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'; // Make sure this CSS file exists and is correctly styled

function MyNavbar() {
  const [navExpanded, setNavExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const sectionRefs = useRef({}); // Keep track of elements for the observer

  // Effect for handling background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { name: 'Home', href: '#', section: 'top' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Refined scrollToSection function
  const scrollToSection = useCallback((sectionId) => {
    setNavExpanded(false); // Close mobile navbar if open

    if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(sectionId);
        if (element) { // Check if the element was found
            const navbar = document.querySelector('.navbar.fixed-top');
            // Provide a sensible default if navbar isn't found immediately or for calculation robustness
            const navbarHeight = navbar ? navbar.offsetHeight : 70;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            // Calculate position to scroll to, compensating for the fixed navbar height
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            // Log a warning if the target element doesn't exist for easier debugging
            console.warn(`Scroll target element with id "${sectionId}" not found.`);
        }
    }
  }, []); // Empty dependency array is correct here


  // Effect for Intersection Observer to highlight active nav link
  useEffect(() => {
    // Ensure IDs exist before setting up observer - defensive check
    const sectionsToObserve = navItems
       .map(item => item.section)
       .filter(id => id !== 'top') // Don't observe 'top'
       .map(id => document.getElementById(id))
       .filter(el => el !== null); // Filter out any elements not found

    if (sectionsToObserve.length === 0 && navItems.length > 1) {
        console.warn("Navbar Observer: No section elements found for IDs:", navItems.map(i => i.section).join(', '));
        // Could indicate sections aren't rendered yet or IDs are mismatched.
    }

    const observerOptions = {
      root: null, // observing relative to viewport
      // Adjust rootMargin: top margin should be negative navbar height + desired trigger offset
      // Bottom margin should be negative viewport height + top margin + desired trigger zone height
      // Example: Trigger when section enters top 40% of viewport below navbar
      rootMargin: '-40% 0px -60% 0px', // Fine-tune this margin based on desired active trigger point
      threshold: 0, // Trigger as soon as any part enters/leaves the rootMargin zone
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the intersecting element is the one we want to set active
          // This helps if multiple sections are briefly in the margin zone during fast scroll
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToObserve.forEach(element => {
        sectionRefs.current[element.id] = element; // Store ref if needed, though not strictly used elsewhere now
        observer.observe(element);
    });

    // Special handling for the 'top' section (Home)
    const handleTopSection = () => {
        // Check if scroll is near the top, considering potential small initial scrolls
        // Use a threshold slightly less than the trigger point for the first section
        // Or a fixed pixel value if preferred
        const firstSection = sectionsToObserve[0];
        const firstSectionTop = firstSection ? firstSection.offsetTop : window.innerHeight;
        const navbarHeight = document.querySelector('.navbar.fixed-top')?.offsetHeight || 70;

        // Set active to 'top' if scroll position is above the first section's trigger point
        if (window.scrollY < firstSectionTop - navbarHeight - 50) { // Adjust the -50 offset as needed
           setActiveSection('top');
        } else if (window.scrollY === 0) { // Explicitly handle scrollY = 0
           setActiveSection('top');
        }
    }

    window.addEventListener('scroll', handleTopSection, { passive: true });

    // Cleanup function
    return () => {
      sectionsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
      });
      observer.disconnect(); // Disconnect observer
      window.removeEventListener('scroll', handleTopSection);
    };
    // Re-run effect if navItems array changes (though it's static here)
  }, [navItems]); // Add navItems dependency


  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
      expanded={navExpanded}
      onToggle={setNavExpanded} // Use react-bootstrap's built-in toggle handler
    >
      <Container fluid>
        <Navbar.Brand
          href="#" // Keep href="#" for semantic correctness but rely on onClick
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            scrollToSection('top');
          }}
          aria-label="Scroll to top"
          style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        >
          <span className="brand-logo-circle">AK</span> {/* Style this with CSS */}
          <span className="brand-gradient-text">Abhimanyu Kumar</span> {/* Style this */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setNavExpanded(e => !e)} /> {/* Use explicit toggle state update */}

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Use ms-auto for right alignment */}
          <Nav className="cont ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                href={item.href} // Keep href for semantics/SEO/fallback
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(item.section);
                }}
                className={activeSection === item.section ? 'active' : '' }
                aria-current={activeSection === item.section ? 'page' : undefined}
              >
                {item.name}
              </Nav.Link>
            ))}
            {/* Button outside the map */}
            <Button
              variant="primary" // Use standard Bootstrap variants or custom class
              className="btn-hire-me ms-md-3 mt-3 mt-md-0 rounded-pill" // Standard Bootstrap spacing/margin utils
              onClick={(e) => {
                  e.preventDefault(); // Good practice for buttons triggering JS actions
                  scrollToSection('contact');
                }}
            >
              Hire Me
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;