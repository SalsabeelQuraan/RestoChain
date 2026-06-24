//1.Utility: Toast
function showToast(message, type = "success") {
    const existing = document.getElementById("rc-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.id = "rc-toast";
    toast.className = [
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-50",
        "flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg",
        "font-label-md text-sm transition-all duration-300 opacity-0 scale-95",
        type === "success"
        ? "bg-primary text-on-primary"
        : "bg-error text-on-error",
    ].join(" ");
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">${
        type === "success" ? "check_circle" : "error"
        }</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove("opacity-0", "scale-95");
        toast.classList.add("opacity-100", "scale-100");
    });

    setTimeout(() => {
        toast.classList.remove("opacity-100", "scale-100");
        toast.classList.add("opacity-0", "scale-95");
        toast.addEventListener("transitionend", () => toast.remove(), {
        once: true,
        });
    }, 3000);
}
//2.Utility: Field Validation
function setFieldError(input, message) {
    // Remove existing error
    clearFieldError(input);
    input.classList.add("border-error", "focus:border-error", "focus:ring-error");
    input.classList.remove("border-outline-variant");
    const err = document.createElement("p");
    err.className = "field-error text-[11px] text-error mt-1 flex items-center gap-1";
    err.innerHTML = `<span class="material-symbols-outlined text-[13px]">error</span>${message}`;
    input.closest("label")?.appendChild(err);
}
function clearFieldError(input) {
    input.classList.remove("border-error", "focus:border-error", "focus:ring-error");
    input.classList.add("border-outline-variant");
    input.closest("label")?.querySelector(".field-error")?.remove();
}
function setFieldSuccess(input) {
    clearFieldError(input);
    input.classList.add("border-primary-container");
}
//3.Form Focus Micro-interactions
    // (Enhances the inline script already in HTML)
function initFocusMicroInteractions() {
    document.querySelectorAll("input, select, textarea").forEach((input) => {
        input.addEventListener("focus", () => {
        input.closest("label")
            ?.querySelector("span.font-label-md")
            ?.classList.add("text-primary");
        });
        input.addEventListener("blur", () => {
        input.closest("label")
            ?.querySelector("span.font-label-md")
            ?.classList.remove("text-primary");
        });
    });
}
//4.Cover Photo Upload
function initCoverPhotoUpload() {
    const coverZone = document.querySelector(
        ".relative.w-full.h-32.rounded-xl.border-dashed"
    );
    if (!coverZone) return;
    // Hidden file input
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.className = "hidden";
    fileInput.id = "cover-upload";
    document.body.appendChild(fileInput);
    coverZone.addEventListener("click", () => fileInput.click());
    // Drag & Drop
    coverZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        coverZone.classList.add("bg-surface-container-high", "border-primary");
    });
    coverZone.addEventListener("dragleave", () => {
        coverZone.classList.remove("bg-surface-container-high", "border-primary");
    });
    coverZone.addEventListener("drop", (e) => {
        e.preventDefault();
        coverZone.classList.remove("bg-surface-container-high", "border-primary");
        const file = e.dataTransfer.files[0];
        if (file) handleCoverFile(file, coverZone);
    });
    fileInput.addEventListener("change", () => {
        if (fileInput.files[0]) handleCoverFile(fileInput.files[0], coverZone);
    });
}
function handleCoverFile(file, zone) {
    if (!file.type.startsWith("image/")) {
        showToast("Please upload a valid image file.", "error");
        return;
    }
    if (file.size > 10 * 1024 * 1024) {
        showToast("Image must be under 10MB.", "error");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        // Update background preview
        const bg = zone.querySelector(".absolute.inset-0");
        if (bg) {
        bg.style.backgroundImage = `url('${e.target.result}')`;
        bg.style.opacity = "0.5";
        }
        // Update label
        const label = zone.querySelector(".text-label-md");
        if (label) label.textContent = file.name;
        showToast("Cover photo uploaded!");
    };
    reader.readAsDataURL(file);
}
//5.Logo Upload
function initLogoUpload() {
    const logoZone = document.querySelector(
        ".w-20.h-20.rounded-xl.border-dashed"
    );
    if (!logoZone) return;
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/svg+xml, image/png";
    fileInput.className = "hidden";
    fileInput.id = "logo-upload";
    document.body.appendChild(fileInput);
    logoZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
        showToast("Logo must be under 5MB.", "error");
        return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
        logoZone.style.backgroundImage = `url('${e.target.result}')`;
        logoZone.style.backgroundSize = "cover";
        logoZone.style.backgroundPosition = "center";
        logoZone.querySelector(".material-symbols-outlined").style.display = "none";
        showToast("Logo uploaded!");
        };
        reader.readAsDataURL(file);
    });
}
//6.Health Permit Attach Button
function initHealthPermitAttach() {
    const attachBtn = document.getElementById("attach-permit-btn");
    if (!attachBtn) return;

    attachBtn.addEventListener("click", () => {
        const permitInput = document.createElement("input");
        permitInput.type = "file";
        permitInput.accept = ".pdf,.json";
        permitInput.click();
        permitInput.addEventListener("change", () => {
            const file = permitInput.files[0];
            if (!file) return;
            const textInput = attachBtn.closest(".flex")?.querySelector("input[type='text']");
            if (textInput) {
                textInput.value = `ipfs://pending-upload/${file.name}`;
                setFieldSuccess(textInput);
            }
            showToast(`Permit file selected: ${file.name}`);
        });
    });
}
//7.Smart Freezer ID Validation
function initSmartFreezerValidation() {
    const freezerInput = document.getElementById("freezer-id");
    if (!freezerInput) return;
    freezerInput.addEventListener("blur", () => {
        const val = freezerInput.value.trim();
        if (!val) return; // Optional field
        const ethDevicePattern = /^ETH-DEVICE-0x[0-9a-fA-F]{3,}/;
        if (!ethDevicePattern.test(val)) {
        setFieldError(freezerInput, "Format: ETH-DEVICE-0x followed by hex characters");
        } else {
        setFieldSuccess(freezerInput);
        }
    });
    freezerInput.addEventListener("input", () => clearFieldError(freezerInput));
}
//8.Website URL Validation
function initWebsiteValidation() {
    const websiteInput = document.querySelector("input[type='url']");
    if (!websiteInput) return;
    websiteInput.addEventListener("blur", () => {
        const val = websiteInput.value.trim();
        if (!val) return; // Optional
        try {
        new URL(val);
        setFieldSuccess(websiteInput);
        } catch {
        setFieldError(websiteInput, "Please enter a valid URL (e.g. https://example.com)");
        }
    });
    websiteInput.addEventListener("input", () => clearFieldError(websiteInput));
}
//9.Phone Validation
function initPhoneValidation() {
    const phoneInput = document.querySelector("input[type='tel']");
    if (!phoneInput) return;
    phoneInput.addEventListener("blur", () => {
        const val = phoneInput.value.trim();
        if (!val) return;
        const phonePattern = /^\+?[\d\s\-().]{7,20}$/;
        if (!phonePattern.test(val)) {
        setFieldError(phoneInput, "Enter a valid phone number");
        } else {
        setFieldSuccess(phoneInput);
        }
    });
    phoneInput.addEventListener("input", () => clearFieldError(phoneInput));
}
//10.Form Submission & Validation
function initSubmitButton() {
    const submitBtn = document.getElementById("submit-btn");
    if (!submitBtn) return;

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (errors.length > 0) {
            showToast(errors[0], "error");
            return;
        }
        submitBtn.innerHTML = `
            <span class="material-symbols-outlined animate-spin">progress_activity</span>
            Submitting...
        `;
        submitBtn.style.pointerEvents = "none";
        setTimeout(() => {
            showToast("Submitted! Verification takes 24–48 hours.");
            submitBtn.innerHTML = `
                Submitted for Verification
                <span class="material-symbols-outlined">check_circle</span>
            `;
            submitBtn.classList.remove("bg-primary", "text-on-primary");
            submitBtn.classList.add("bg-primary-container", "text-on-primary-container");
        }, 1800);
    });
}
function validateForm() {
    const errors = [];
    // Restaurant Name (required)
    const nameInput = document.getElementById("restaurant-name");
    if (nameInput && !nameInput.value.trim()) {
        setFieldError(nameInput, "Restaurant name is required");
        errors.push("Restaurant name is required");
    }
    // Cuisine (required)
    const cuisineSelect = document.querySelector("select");
    if (cuisineSelect && cuisineSelect.value === "Select Cuisine") {
        setFieldError(cuisineSelect, "Please select a cuisine type");
        errors.push("Please select a cuisine type");
    }
    // Address (required)
    const addressInput = document.querySelector("textarea");
    if (addressInput && !addressInput.value.trim()) {
        setFieldError(addressInput, "Address is required");
        errors.push("Full address is required");
    }
    // Phone (required)
    const phoneInput = document.querySelector("input[type='tel']");
    if (phoneInput && !phoneInput.value.trim()) {
        setFieldError(phoneInput, "Phone number is required");
        errors.push("Phone number is required");
    }
    return errors;
}
//11.Bottom Nav: active state
function initBottomNav() {
    // This is the Register page — highlight "Home" as active (default)
    // Navigation links can be wired here when routes are defined
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href === "#") e.preventDefault();
        });
    });
}
//12.Scroll-reveal for cards
function initScrollReveal() {
    const cards = document.querySelectorAll(".bg-surface-container-lowest");
    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(16px)";
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    });
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
            }
        });
        },
        { threshold: 0.08 }
    );
    cards.forEach((card) => observer.observe(card));
}
//13.Init all
document.addEventListener("DOMContentLoaded", () => {
    initFocusMicroInteractions();
    initCoverPhotoUpload();
    initLogoUpload();
    initHealthPermitAttach();
    initSmartFreezerValidation();
    initWebsiteValidation();
    initPhoneValidation();
    initSubmitButton();
    initBottomNav();
    initScrollReveal();
});