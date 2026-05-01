(function () {
  const services = [
    ["contact-center-designs.html", "Contact Center Design & Optimization", "Restructure your operations for peak efficiency with expert-led process design and architecture planning."],
    ["consulting-project-management.html", "Consulting & Project Management", "Strategic guidance at every stage, from initial planning through go-live and beyond."],
    ["dynamic-customer-experience-solutions.html", "Dynamic Customer Experience", "Unify every customer touchpoint into one connected, consistent experience platform."],
    ["end-to-end-contact-centre-migration.html", "End-to-End Cloud Migration", "Seamlessly move your entire contact center infrastructure to the cloud with zero data loss."],
    ["telecom-implementation-operations.html", "Telecom Implementation & Operations", "Expert design and management of your telecom infrastructure to support high-volume communication demands."],
    ["inbound-outbound.html", "Inbound / Outbound / Telemarketing", "Manage voice, email, live chat, SMS, and telemarketing through intelligent tools and workflows."]
  ];

  const path = window.location.pathname.split("/").pop() || "index.html";
  const active = (file) => (path === file ? " is-active" : "");
  const resourceActive = ["resources.html", "success-stories.html", "whitepapers.html", "blog.html", "best-practices-for-designing-effective-contact-centers.html"].includes(path) ? " is-active" : "";

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container nav-shell">
          <a class="brand" href="index.html" aria-label="SkaiConnect home">
            <img src="assets/logo.webp" alt="SkaiConnect" style="height: 40px; width: auto;">
          </a>
          <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mainNav"><span></span></button>
          <nav class="nav-links" id="mainNav" aria-label="Main navigation">
            <a class="${active("index.html")}" href="index.html">Home</a>
            <div class="nav-group">
              <a>Services</a>
              <div class="mega-menu">
                <a class="mega-item" href="contact-center-designs.html"><strong>Contact Center Design & Optimization</strong><span>Restructure your operations for peak efficiency.</span></a>
                <a class="mega-item" href="consulting-project-management.html"><strong>Consulting & Project Management</strong><span>Strategic guidance from planning through go-live.</span></a>
                <a class="mega-item" href="dynamic-customer-experience-solutions.html"><strong>Dynamic Customer Experience</strong><span>Unify every customer touchpoint seamlessly.</span></a>
                <a class="mega-item" href="end-to-end-contact-centre-migration.html"><strong>End-to-End Cloud Migration</strong><span>Move to cloud with zero data loss and minimal downtime.</span></a>
                <a class="mega-item" href="telecom-implementation-operations.html"><strong>Telecom Implementation & Operations</strong><span>Expert telecom infrastructure management.</span></a>
                <a class="mega-item" href="inbound-outbound.html"><strong>Inbound / Outbound / Telemarketing</strong><span>Manage all channels with intelligent workflows.</span></a>
              </div>
            </div>
            <a class="${active("why-choose-us.html")}" href="why-choose-us.html">Company</a>
            <a class="${resourceActive}" href="resources.html">Resources</a>
            <a class="${active("support.html")}" href="support.html">Support</a>
          </nav>
          <div class="nav-actions">
            <a class="nav-phone" href="tel:+18004842275">800-484-2275</a>
            <a class="btn btn-primary" href="contact.html">Book a Call</a>
          </div>
        </div>
      </header>
    `;
  }

  const serviceNav = document.querySelector("[data-service-nav]");
  if (serviceNav) {
    serviceNav.innerHTML = `
      <div class="service-nav">
        <div class="container service-nav-inner">
          ${services.map(([url, title]) => `<a class="${active(url)}" href="${url}">${title}</a>`).join("")}
        </div>
      </div>
    `;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-main">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <img src="assets/logo.webp" alt="SkaiConnect" style="height: 36px; width: auto;">
            </a>
            <p style="color: #8B0000;">SkaiConnect designs, migrates, and supports cloud call centers for businesses that need cleaner workflows and better customer conversations.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="why-choose-us.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="blog.html">Blogs</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
              <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
              <li><a href="support.html">Support</a></li>
              <li><a href="support.html#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Tampa, Florida</li>
              <li><a href="mailto:project@skaiconnect.com">project@skaiconnect.com</a></li>
              <li><a href="tel:+18004842275">800-484-2275</a></li>
              <li>9 AM - 5 PM, Monday - Saturday</li>
            </ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>SKAI Connect Copyright (c) 2026. All rights reserved.</span>
          <span>Made with care by Socialiency Advertising</span>
        </div>
      </footer>
    `;
  }

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".menu-toggle");
    if (!toggle) return;
    const nav = document.getElementById("mainNav");
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("form[data-consultation-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const success = form.querySelector(".form-success");
      if (success) success.style.display = "block";
      form.reset();
    });
  });

  const animated = document.querySelectorAll("[data-animate]");
  if (animated.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    animated.forEach((element) => observer.observe(element));
  }

  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const runCounter = (counter) => {
      const target = Number(counter.dataset.count || "0");
      const suffix = counter.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    counters.forEach((counter) => counterObserver.observe(counter));
  }
})();
