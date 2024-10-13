const sidebarToggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.getElementById("logo-sidebar");
const mainContent = document.querySelector(".main-content");


sidebarToggleBtn.addEventListener("click", (e) => {
  
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");
  e.stopPropagation();
});

mainContent.addEventListener("click", (e) => {
  //console.log("first");
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
      resumeTabs.forEach((t) => {
      t.classList.remove("active-tab", "text-sky-500", "font-semibold");
      t.classList.add("text-gray-300"); // Set inactive tab color
    });
      resumeTabContents.forEach(content => content.classList.add("hidden"));
      
      // Add 'active' class to the clicked tab and the corresponding content
      tab.classList.add("active", "text-sky-500", "font-semibold");
      document.getElementById(tab.dataset.target).classList.remove("hidden");
    });
  });
});

// certificate tabs

const certificateTabs = document.querySelectorAll(".data-tab");
const certificateTabContents = document.querySelectorAll(".certificate-tab-content");

// Add click event listener to each button
certificateTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove 'active-tab', 'text-sky-500', and 'font-semibold' from all buttons
    certificateTabs.forEach((t) => {
      t.classList.remove("active-tab", "text-sky-500", "font-semibold");
      t.classList.add("text-gray-300"); // Set inactive tab color
    });

    // Hide all tab content sections
    certificateTabContents.forEach((content) => content.classList.add("hidden"));

    // Add 'active-tab', 'text-sky-500', and 'font-semibold' to the clicked tab
    tab.classList.add("active-tab", "text-sky-500", "font-semibold");
    tab.classList.remove("text-gray-300"); // Remove inactive tab color

    // Show the corresponding tab content
    const targetId = tab.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
  });
});



// Select all research items and modal elements
const researchItems = document.querySelectorAll('.research-item');
const modal = document.getElementById('researchModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalLink = document.getElementById('modalLink');
const closeModal = document.getElementById('closeModal');

// Add event listeners to research items
researchItems.forEach(item => {
  item.addEventListener('click', () => {
    const image = item.getAttribute('data-image');
    const title = item.getAttribute('data-title');
    const link = item.getAttribute('data-link');

    // Set modal content
    modalImage.src = image;
    modalTitle.textContent = title;
    modalLink.href = link;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

// Close modal on click of close button
closeModal.addEventListener('click', () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
});

