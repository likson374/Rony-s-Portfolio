const sidebarToggleBtn = document.querySelector(".fa-bars");
const sidebar = document.getElementById("logo-sidebar");
const mainContent = document.querySelector(".main-content");


sidebarToggleBtn.addEventListener("click", (e) => {
  
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");
  e.stopPropagation();
});

mainContent.addEventListener("click", (e) => {
  console.log("first");
  if (!sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
  }
});

sidebar.addEventListener("click", (e) => {
  e.stopPropagation(); 
});


// Tabs Section
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Add click event listener to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-target");

    // Remove active class from all tabs and contents
    tabs.forEach((t) =>
      t.classList.remove("active", "text-sky-500", "font-semibold")
    );
    contents.forEach((c) => c.classList.add("hidden"));

    // Add active class to the clicked tab and show the corresponding content
    tab.classList.add("active", "text-sky-500", "font-semibold");
    document.getElementById(target).classList.remove("hidden");
  });
});

// resume tabs
document.addEventListener("DOMContentLoaded", function () {
  const resumeTabs = document.querySelectorAll(".resume-tab");
  const resumeTabContents = document.querySelectorAll(".resume-tab-content");

  resumeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove 'active' class from all tabs and tab contents
      resumeTabs.forEach(t => t.classList.remove("active", "text-sky-500", "font-semibold"));
      resumeTabContents.forEach(content => content.classList.add("hidden"));
      
      // Add 'active' class to the clicked tab and the corresponding content
      tab.classList.add("active", "text-sky-500", "font-semibold");
      document.getElementById(tab.dataset.target).classList.remove("hidden");
    });
  });
});
