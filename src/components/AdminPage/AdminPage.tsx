import { useSelector } from "react-redux";
import { IUserRole } from "../store/rolereducer";
import "./AdminPage.scss";

const AdminPage = () => {
    const { username, role } = useSelector((state: { roleName: IUserRole }) => state.roleName);
    return (
        <div className="admin-page">
            <div className="admin-header">
                <div className="navbar">
                    <div className="navbar-item">Products</div>
                    <div className="navbar-item">Dashboard</div>
                    <div className="navbar-item">User Management</div>
                </div>
            </div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <div className="dashboard-item">User Distribution</div>
                    <div className="dashboard-item">Today's Sale</div>
                    <div className="dashboard-item">Total Customers</div>
                </div>
                <div className="sales-report">
                    Sales Report
                </div>
            </div>
            <div className="user-management">
                <div className="user-management-header">
                    <div className="navbar-item">Products</div>
                    <div className="navbar-item">Dashboard</div>
                    <div className="navbar-item">User Management</div>
                </div>
                <div className="user-management-content">
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img src="/user.png" alt="User Avatar" />
                        </div>
                        <div className="user-details">
                            <div className="user-name">{username}</div>
                            <div className="user-role">{role}</div>
                        </div>
                        <div className="user-actions">
                            <button className="btn btn-primary mx-2">Edit</button>
                            <button className="btn btn-primary mx-2">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;
