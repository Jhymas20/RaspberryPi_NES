document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const featureDescription = document.getElementById('feature-description');
    const descriptionTitle = document.getElementById('description-title');
    const descriptionText = document.getElementById('description-text');

    const featureInfo = {
        hardware: {
            title: 'Hardware Specifications',
            description: 'Our Raspberry Pi NES Console is powered by the latest Raspberry Pi 4 Model B with 4GB of RAM. This powerful single-board computer provides ample processing power for smooth emulation of classic NES games and more. The quad-core Cortex-A72 (ARM v8) 64-bit SoC runs at 1.5GHz, ensuring a lag-free gaming experience.'
        },
        storage: {
            title: 'Storage Capacity',
            description: 'The console comes with a 32GB MicroSD card pre-installed with RetroPie, a powerful and flexible retro-gaming software. This provides ample space for the operating system, emulators, and a large library of your favorite classic games. The storage is easily expandable by replacing the MicroSD card with a larger capacity one, allowing you to store even more games and media.'
        },
        connectivity: {
            title: 'Connectivity Options',
            description: 'Our Raspberry Pi NES Console offers versatile connectivity options. It features two HDMI ports for connecting to modern displays, four USB ports for controllers and other peripherals, and built-in Wi-Fi and Bluetooth for wireless connectivity. This allows you to easily connect the console to your TV, use both wired and wireless controllers, and even stream games or transfer files wirelessly.'
        }
    };

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            const featureType = feature.getAttribute('data-feature');
            const info = featureInfo[featureType];
            
            descriptionTitle.textContent = info.title;
            descriptionText.textContent = info.description;
            
            if (featureDescription.classList.contains('show')) {
                featureDescription.classList.remove('show');
                setTimeout(() => {
                    featureDescription.classList.add('show');
                }, 300);
            } else {
                featureDescription.classList.add('show');
            }

            // Scroll to the description
            featureDescription.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Close description when clicking outside
    document.addEventListener('click', (e) => {
        if (!featureDescription.contains(e.target) && !e.target.closest('.feature')) {
            featureDescription.classList.remove('show');
        }
    });

    // Accessibility: Close description with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && featureDescription.classList.contains('show')) {
            featureDescription.classList.remove('show');
        }
    });
});