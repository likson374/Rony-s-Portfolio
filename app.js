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
// Select all the certificate items and modal elements
const certificateItems = document.querySelectorAll('.c-item');
const modal = document.getElementById('imageModal');
console.log(modal)
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.getElementById('closeModal');

// Function to open modal with the clicked image
function openModal(imageSrc) {
  modalImage.src = imageSrc;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

// Function to close the modal
function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Add event listeners to certificate items
certificateItems.forEach((item) => {
  //console.log(item)
  const img = item.querySelector('img');
  const button = item.querySelector('button');

  // Open modal when image or button is clicked
  img.addEventListener('click', () => openModal(img.src));
  button.addEventListener('click', () => openModal(img.src));
});

// Event listener to close modal
closeModalButton.addEventListener('click', closeModal);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});




// Select all research items and lightbox elements
const researchItems = document.querySelectorAll('.research-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxLink = document.getElementById('lightboxLink');
const closeLightbox = document.getElementById('closeLightbox');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

let currentIndex = 0;

// Function to show the lightbox for the selected item
function showLightbox(index) {
  const selectedItem = researchItems[index];
  console.log(selectedItem)
  const image = selectedItem.querySelector('img').src;
  const title = selectedItem.querySelector('img').dataset.title;
  const link = selectedItem.querySelector('img').dataset.link;

  // Set lightbox content
  lightboxImage.src = image;
  lightboxTitle.textContent = title;
  lightboxLink.href = link;

  // Show lightbox
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.documentElement.classList.add('overflow-hidden');

  currentIndex = index;
}

// Function to close the lightbox
function hideLightbox() {
  lightbox.classList.remove('flex');
  lightbox.classList.add('hidden');
  document.documentElement.classList.remove('overflow-hidden');
}

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % researchItems.length;
  showLightbox(currentIndex);
}

// Function to show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + researchItems.length) % researchItems.length;
  showLightbox(currentIndex);
}

// Event listener for closing the lightbox
closeLightbox.addEventListener('click', hideLightbox);

// Event listeners for next and previous buttons
nextImage.addEventListener('click', showNextImage);
prevImage.addEventListener('click', showPrevImage);

// Event listener for clicking on "Show Details" buttons
researchItems.forEach((item, index) => {
  const showDetailsBtn = item.querySelector('.show-details-btn');
  showDetailsBtn.addEventListener('click', () => showLightbox(index));
});

// Handle keyboard navigation for lightbox
document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('hidden')) {
    if (event.key === 'Escape') {
      hideLightbox();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'ArrowLeft') {
      showPrevImage();
    }
  }
});

// bg-opacity-75