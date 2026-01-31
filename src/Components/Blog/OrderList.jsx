import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../Utils/constants/apiEndpoints";
import Toast from "../Toast/Toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useTranslation } from "react-i18next";

const OrderList = () => {
  const { t } = useTranslation("seller_order");

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [toast, setToast] = useState(null);
  const [downloadingInvoice, setDownloadingInvoice] = useState({});

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const getToken = () => localStorage.getItem("accessToken");

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.append("search", search.trim());
      if (statusFilter) params.append("status", statusFilter);

      const res = await fetch(`${BASE_URL}/api/seller/orders?${params}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      const data = await res.json();
      if (data.success) setOrders(data.data || []);
      else showToast(data.message || t("toast.load_orders_error"), "error");
    } catch {
      showToast(t("toast.server_connect_error"), "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetail = async (id) => {
    setDetailLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/seller/orders/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) {
        setSelectedOrder(data.data);
        setShowDetailModal(true);
      } else showToast(t("toast.not_found"), "error");
    } catch {
      showToast(t("toast.detail_load_error"), "error");
    } finally {
      setDetailLoading(false);
    }
  };

  const downloadInvoice = async (orderId, orderCode) => {
    setDownloadingInvoice((prev) => ({ ...prev, [orderId]: true }));

    try {
      const res = await fetch(`${BASE_URL}/api/seller/orders/${orderId}/invoice`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to download invoice");
      }

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Invoice_${orderCode}.pdf`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      showToast(t("toast.download_success"), "success");
    } catch (error) {
      console.error("Download error:", error);
      showToast(t("toast.download_failed"), "error");
    } finally {
      setDownloadingInvoice((prev) => ({ ...prev, [orderId]: false }));
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [search, statusFilter]);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "2rem" }}>
      <div className="container-fluid">
        {/* HEADER */}
        <h1 className="fw-bold mb-1">{t("page.title")}</h1>
        <p className="text-muted mb-4">{t("page.desc")}</p>

        {/* FILTER */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder={t("filter.search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "0.5rem 0.75rem",
              }}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "0.5rem 0.75rem",
              }}
            >
              <option value="">{t("filter.all_status")}</option>
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" />
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>{t("table.id")}</th>
                      <th>{t("table.order_code")}</th>
                      <th>{t("table.customer")}</th>
                      <th>{t("table.phone")}</th>
                      <th>{t("table.total")}</th>
                      <th>{t("table.status")}</th>
                      <th>{t("table.actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td>{o.id}</td>
                        <td className="fw-medium">{o.orderCode}</td>
                        <td>{o.customerName}</td>
                        <td>{o.customerPhone}</td>
                        <td>{o.finalAmount?.toLocaleString("vi-VN")} đ</td>
                        <td>
                          <span
                            className={`badge ${
                              o.status === "PENDING"
                                ? "bg-warning text-dark"
                                : o.status === "CONFIRMED"
                                ? "bg-info text-white"
                                : o.status === "SHIPPED"
                                ? "bg-primary"
                                : o.status === "DELIVERED"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            {/* View Details Button */}
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => fetchOrderDetail(o.id)}
                              title={t("actions.view_detail")}
                              disabled={detailLoading}
                            >
                              <VisibilityIcon fontSize="small" />
                            </button>

                            {/* Download Invoice Button */}
                            <button
                              className="btn btn-sm btn-outline-success"
                              onClick={() => downloadInvoice(o.id, o.orderCode)}
                              title={t("actions.download_invoice")}
                              disabled={downloadingInvoice[o.id]}
                            >
                              {downloadingInvoice[o.id] ? (
                                <span className="spinner-border spinner-border-sm" role="status" />
                              ) : (
                                <PictureAsPdfIcon fontSize="small" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan={7} className="text-center text-muted py-4">
                          {t("table.empty")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* MODAL CHI TIẾT */}
        {showDetailModal && selectedOrder && (
          <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
              <div className="modal-content rounded-4">
                <div className="modal-header border-0">
                  <h5 className="fw-bold">{t("modal.title", { code: selectedOrder.orderCode })}</h5>
                </div>

                <div className="modal-body">
                  {/* Customer Info */}
                  <div className="mb-4 p-3 bg-light rounded">
                    <h6 className="fw-bold mb-3">{t("modal.customer_info")}</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <strong>{t("modal.name")}:</strong> {selectedOrder.customerName}
                        </p>
                        <p>
                          <strong>{t("modal.phone")}:</strong> {selectedOrder.customerPhone}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <strong>{t("modal.address")}:</strong>{" "}
                          {selectedOrder.shippingAddress || t("modal.na")}
                        </p>
                        <p>
                          <strong>{t("modal.status")}:</strong>{" "}
                          <span className="badge bg-warning">{selectedOrder.status}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>{t("modal.items.image")}</th>
                          <th>{t("modal.items.product")}</th>
                          <th>{t("modal.items.price")}</th>
                          <th>{t("modal.items.qty")}</th>
                          <th>{t("modal.items.subtotal")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.items?.map((item, i) => (
                          <tr key={i}>
                            <td>
                              {item.productImageUrl && (
                                <img
                                  src={`${BASE_URL}/api/auth${item.productImageUrl}`}
                                  style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 8 }}
                                  alt={item.productName}
                                  onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/90?text=No+Image";
                                  }}
                                />
                              )}
                            </td>
                            <td>
                              <div className="fw-medium">{item.productName}</div>
                              {item.variantName && (
                                <div className="text-muted small">
                                  {t("modal.items.variant")}: {item.variantName}
                                </div>
                              )}
                            </td>
                            <td>
                              <div>
                                <div>{item.unitPrice?.toLocaleString("vi-VN")} đ</div>

                                {item.defaultPrice && item.defaultPrice !== item.unitPrice && (
                                  <div style={{ textDecoration: "line-through", color: "#999", fontSize: "0.9em" }}>
                                    {item.defaultPrice?.toLocaleString("vi-VN")} đ
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              {item.quantity}
                              {item.unit && (
                                <div className="text-muted small" style={{ fontStyle: "italic" }}>
                                  {t("modal.items.uom")} ({item.unit})
                                </div>
                              )}
                            </td>
                            <td className="fw-medium">{item.subtotal?.toLocaleString("vi-VN")} đ</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* TOTAL */}
                  <div className="text-end mt-4">
                    <h5>
                      {t("modal.total")}:{" "}
                      <span className="text-success">
                        {selectedOrder.finalAmount?.toLocaleString("vi-VN")} đ
                      </span>
                    </h5>
                  </div>
                </div>

                <div className="modal-footer border-0">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => downloadInvoice(selectedOrder.id, selectedOrder.orderCode)}
                    disabled={downloadingInvoice[selectedOrder.id]}
                  >
                    {downloadingInvoice[selectedOrder.id] ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        {t("modal.downloading")}
                      </>
                    ) : (
                      <>
                        <PictureAsPdfIcon fontSize="small" className="me-2" />
                        {t("actions.download_invoice")}
                      </>
                    )}
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => setShowDetailModal(false)}>
                    {t("modal.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {toast && <Toast {...toast} />}
      </div>
    </div>
  );
};

export default OrderList;
