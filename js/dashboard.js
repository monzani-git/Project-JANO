
// Gráfico Planos Vendidos no Mês
var ctxPlanos = document.getElementById('planosChart').getContext('2d');
var planosChart = new Chart(ctxPlanos, {
    type: 'doughnut',
    data: {
        labels: ['Plano 1', 'Plano 2', 'Plano 3', 'Plano 4'],
        datasets: [{
            data: [40, 20, 26.7, 13.3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF'],
        }]
    }
});

// Gráfico Vendas por Dia
var ctxVendasDia = document.getElementById('vendasDiaChart').getContext('2d');
var vendasDiaChart = new Chart(ctxVendasDia, {
    type: 'bar',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
            data: [1500, 3200, 4000, 5000, 4500, 4200, 5100],
            backgroundColor: ['#000', '#f0f', '#00f', '#0f0', '#ff0', '#fa0', '#f00'],
        }]
    }
});

// Gráfico Vendedor x Total Mês
var ctxVendedor = document.getElementById('vendedorChart').getContext('2d');
var vendedorChart = new Chart(ctxVendedor, {
    type: 'line',
    data: {
        labels: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4'],
        datasets: [{
            data: [12000, 15000, 17000, 14000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Gráfico Monthly Sales Data
var ctxSalesData = document.getElementById('salesDataChart').getContext('2d');
var salesDataChart = new Chart(ctxSalesData, {
    type: 'radar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales Data',
            data: [65, 59, 90, 81, 56, 55],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});
