// script.js

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
document.getElementById('toggle-sidebar').addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animated Stats
const animateStat = (id, endValue) => {
  let startValue = 0;
  const duration = 2000;
  const increment = Math.ceil(endValue / (duration / 50));
  const statElement = document.getElementById(id);

  const interval = setInterval(() => {
    startValue += increment;
    if (startValue >= endValue) {
      startValue = endValue;
      clearInterval(interval);
    }
    statElement.textContent = startValue;
  }, 50);
};

animateStat('sales-stat', 12000);
animateStat('users-stat', 420);
animateStat('orders-stat', 180);

// Chart.js Visualization
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [3000, 5000, 7000, 10000, 12000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  },
});
