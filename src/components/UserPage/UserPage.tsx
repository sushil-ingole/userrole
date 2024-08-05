import { useSelector } from 'react-redux';
import { IUserRole } from '../store/rolereducer';
import "./UserPage.scss";

const UserPage = () => {
    const {username} = useSelector((state: {roleName: IUserRole}) => state.roleName);
    return (
        <div className="user-page">
            <div className="user-dashboard">
                <div className="navbar">
                    <div className="navbar-item">Products</div>
                    <div className="navbar-item">Dashboard</div>
                    <div className="navbar-item">Invoices</div>
                </div>
                <div className="dashboard-content">
                    <div className="dashboard-header">Welcome {username}</div>
                    <div className="dashboard-stats">
                        <div className="sales-graph">
                            Sales Graph
                            <div className="graph-placeholder"></div>
                        </div>
                        <div className="notifications">
                            Notifications
                            <div className="notifications-placeholder"></div>
                        </div>
                    </div>
                    <div className="recently-paid-invoices">
                        Recently Paid Invoices
                        <div className="invoice-list">
                            <div className="invoice-item">ABC123 | $1,452.32</div>
                            <div className="invoice-item">DEF456 | $2,325.45</div>
                            <div className="invoice-item">GHI789 | $3,745.67</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-invoices">
                <div className="navbar">
                    <div className="navbar-item">Products</div>
                    <div className="navbar-item">Dashboard</div>
                    <div className="navbar-item">Invoices</div>
                </div>
                <div className="invoices-content">
                    <div className="invoices-header">Invoices as of {new Date().toLocaleDateString()}</div>
                    <div className="invoices-stats">
                        <div className="stat-item">Paid Invoices: 15</div>
                        <div className="stat-item">Due Invoices: 23</div>
                        <div className="stat-item">Total Invoices: 38</div>
                    </div>
                    <div className="invoices-list">
                        <div className="invoice-item">
                            <div className="invoice-number">ABC123</div>
                            <div className="invoice-amount">$1,452.32</div>
                        </div>
                        <div className="invoice-item">
                            <div className="invoice-number">DEF456</div>
                            <div className="invoice-amount">$2,325.45</div>
                        </div>
                        <div className="invoice-item">
                            <div className="invoice-number">GHI789</div>
                            <div className="invoice-amount">$3,745.67</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;