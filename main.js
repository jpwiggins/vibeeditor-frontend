// frontend/static/js/main.js

// ========== Handle File Upload & Form Submission ==========
document.getElementById('edit-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Hide previous messages/sections
  document.getElementById('video-preview').style.display = 'none';
  document.getElementById('payment-section').style.display = 'none';
  document.getElementById('progress-message').textContent = 'Uploading and processing...';
  document.getElementById('progress-fill').style.width = '10%';

  // Gather form data
  const formData = new FormData(this);

  // Optional: Add values from prompt select if prompt is empty
  const promptInput = document.getElementById('prompt');
  if (!promptInput.value) {
    const selected = document.getElementById('prompt-select').value;
    if (selected) formData.set('prompt', selected);
  }

  try {
    // Start backend processing (adjust endpoint if needed)
    const response = await fetch('/api/edit', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    if (data.task_id) {
      pollStatus(data.task_id);
    } else {
      document.getElementById('progress-message').textContent = 'Failed to start processing.';
    }
  } catch (err) {
    document.getElementById('progress-message').textContent = 'Error uploading file.';
  }
});

// ========== Poll Backend for Status ==========
async function pollStatus(task_id) {
  document.getElementById('progress-fill').style.width = '30%';
  let done = false;
  while (!done) {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(`/api/status/${task_id}`);
    const data = await res.json();
    if (data.status === 'done' && data.preview_url) {
      showPreview(data.original_url, data.preview_url);
      done = true;
    } else if (data.status === 'failed') {
      document.getElementById('progress-message').textContent = 'Processing failed.';
      done = true;
    } else {
      document.getElementById('progress-message').textContent = `Processing... (${data.status})`;
      // Optionally update progress bar
    }
  }
  document.getElementById('progress-fill').style.width = '100%';
}

// ========== Show Video Preview and Payment ==========
function showPreview(originalUrl, previewUrl) {
  if (originalUrl) {
    document.getElementById('original-player').src = originalUrl;
  }
  document.getElementById('preview-player').src = previewUrl;
  document.getElementById('video-preview').style.display = 'block';
  document.getElementById('payment-section').style.display = 'block';
  document.getElementById('progress-message').textContent = 'Preview ready. Please complete payment to download.';
}

// ========== Handle Payment (Placeholder Example) ==========
document.getElementById('pay-button').addEventListener('click', async function() {
  // You would use Stripe.js here to create a payment intent and collect card details
  // This is a placeholder for your payment logic
  document.getElementById('progress-message').textContent = 'Processing payment...';

  // Example: After payment success, fetch final download URL from backend
  const res = await fetch('/api/pay', { method: 'POST' /*, body: ... */ });
  const data = await res.json();
  if (data.download_url) {
    document.getElementById('progress-message').innerHTML =
      `<a href="${data.download_url}" download>Download Final Video</a>`;
  } else {
    document.getElementById('progress-message').textContent = 'Payment failed.';
  }
});

// ========== Drag & Drop Upload Enhancement ==========
const dropZone = document.getElementById('drop-zone');
const videoInput = document.getElementById('video');
dropZone.addEventListener('click', () => videoInput.click());
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('hover');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('hover'));
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('hover');
  videoInput.files = e.dataTransfer.files;
});

// ========== Help Modal Logic ==========
document.querySelector('button[aria-label="Open help modal"]').addEventListener('click', () => {
  document.getElementById('help-modal').style.display = 'block';
});
document.querySelector('button[aria-label="Close help modal"]').addEventListener('click', () => {
  document.getElementById('help-modal').style.display = 'none';
});

