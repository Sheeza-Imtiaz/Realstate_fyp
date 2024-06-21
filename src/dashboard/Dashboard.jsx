import React from 'react';

const Dashboard = () => {
    const userCount = 1234; // Replace with actual user data
    const propertyCount = 567; // Replace with actual property data

    // Replace with your chart data (user/property growth over time)
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Users',
                data: [1000, 1100, 1200, 1300, 1400, 1500],
            },
        ],
    };

    return (
        <div className="dashboard">
            {/* Add a header component here (optional) */}
            <div className="metrics-container">
                <UserMetricsCard userCount={userCount} />
                <PropertyMetricsCard propertyCount={propertyCount} />
            </div>
            <Chart data={chartData} />
        </div>
    );
};

const UserMetricsCard = ({ userCount }) => {
    return (
        <div className="metrics-card">
            <h2>Total Users:</h2>
            <h1>{userCount}</h1>
            <i className="fas fa-users"></i>
        </div>
    );
};

const PropertyMetricsCard = ({ propertyCount }) => {
    return (
        <div className="metrics-card">
            <h2>Total Properties:</h2>
            <h1>{propertyCount}</h1>
            <i className="fas fa-home"></i> 
        </div>
    );
};

const Chart = ({ data }) => {
    return <div>Your Chart Here</div>;
};

export default Dashboard;
