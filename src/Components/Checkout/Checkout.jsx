import React from "react";
import "./checkout.css";
import Navbar from "../Constant/Navbar/Navbar";
import Banner from "../Constant/Banner/Banner";
import Quality from "../Constant/Quality/Quality";

function CheckoutForm() {
  return (
    <div className="form">
      <h1>Billing details</h1>
      <form>
        <div className="input">
          <label>First name</label>
          <input type="text" name="firstName" />
        </div>
        <div className="input">
          <label>Company Name (Optional)</label>
          <input type="text" name="company" />
        </div>
        <div className="input">
          <label>Country / Region</label>
          <select name="country">
            <option>Egypt</option>
            <option>USA</option>
            <option>UK</option>
            <option>Saudi Arabia</option>
          </select>
        </div>
        <div className="input">
          <label>Street address</label>
          <input type="text" name="address" />
        </div>
        <div className="input">
          <label>Town / City</label>
          <input type="text" name="city" />
        </div>
        <div className="input">
          <label>Phone</label>
          <input type="text" name="phone" />
        </div>
        <div className="input">
          <label>Email address</label>
          <input type="email" name="email" />
        </div>
        <div className="input">
          <label>Additional information</label>
          <input type="text" name="note" />
        </div>
      </form>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="table">
      <div className="order-summary">
        <h2>Your Order</h2>
        <table>
          <tbody>
            <tr>
              <td>Product</td>
              <td>Subtotal</td>
            </tr>
            <tr>
              <td>Asgaard sofa × 1</td>
              <td>25,000 EGP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>25,000 EGP</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="total">25,000 EGP</td>
            </tr>
          </tbody>
        </table>
        <div className="payment-methods">
          <label>
            <input type="radio" name="payment" defaultChecked /> Direct Bank
            Transfer
          </label>
          <p>Make your payment directly into our bank account.</p>
          <label>
            <input type="radio" name="payment" /> Cash On Delivery
          </label>
        </div>
        <div className="privacy">
          Your personal data will be used to process your order.
          <br />
          <a href="#">privacy policy</a>
        </div>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Banner title={"Checkout"} />
      <section id="content">
        <CheckoutForm />
        <OrderSummary />
      </section>
      <Quality />
    </>
  );
}
