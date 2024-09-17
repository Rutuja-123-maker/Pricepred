document.addEventListener('DOMContentLoaded', () => {
    // Pie Chart for Crop Distribution
    const ctx = document.getElementById('cropPieChart').getContext('2d');
    const cropPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gram', 'Tur', 'Urad', 'Moong', 'Masur', 'Onion', 'Potato'],
            datasets: [{
                label: 'Crop Distribution',
                data: [15, 20, 10, 5, 10, 25, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#3498DB', '#1ABC9C', '#E74C3C']
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Crops for Market Intervention'
            }
        }
    });

    // Price Prediction Form
    document.getElementById('crop-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const crop = document.getElementById('crop-select').value;
        const date = document.getElementById('date').value;

        if (!date) {
            alert("Please select a date.");
            return;
        }

        // Simulate price prediction
        const predictedPrice = predictCropPrice(crop);
        document.getElementById('predicted-price').textContent = `₹${predictedPrice} per kg`;
    });

    // Mock function to simulate prediction based on the crop
    function predictCropPrice(crop) {
        const prices = {
            gram: 50,
            tur: 70,
            urad: 65,
            moon: 55,
            masur: 60,
            onion: 30,
            potato: 25
        };
        return prices[crop] || "--";
    }
});
