import "./payment-page.css";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <section className="select-payment-method-wrapper">
        <h1 className="select-payment-method-container">
          <p className="select-payment">{`Select Payment        `}</p>
          <p className="method"> Method</p>
        </h1>
      </section>
      <section className="frame-section">
        <div className="debit-credit-card-wrapper">
          <h1 className="debit-credit">{`Debit / Credit Card `}</h1>
        </div>
        <div className="forms-parent">
          <div className="forms">
            <div className="toggle-list">
              <div className="toggle">
                <img className="iconcard" alt="" src="/iconcard.svg" />
                <div className="label1">Card</div>
              </div>
              <div className="toggle1">
                <img className="iconeps" alt="" src="/iconeps.svg" />
                <div className="label2">EPS</div>
              </div>
              <div className="toggle2">
                <img className="icongiropay" alt="" src="/icongiropay.svg" />
                <div className="label3">Giropay</div>
              </div>
              <div className="input">
                <img className="ellipsis-icon" alt="" src="/ellipsis.svg" />
              </div>
            </div>
            <div className="inputs">
              <div className="label4">Card number</div>
              <div className="input1">
                <div className="label5">
                  <div className="label6">
                    <div className="label7">1234 1234 1234 1234</div>
                  </div>
                  <div className="banks">
                    <img
                      className="bankvisa-icon"
                      loading="lazy"
                      alt=""
                      src="/bankvisa.svg"
                    />
                    <img
                      className="bankmastercard-icon"
                      loading="lazy"
                      alt=""
                      src="/bankmastercard.svg"
                    />
                    <img
                      className="bankamex-icon"
                      loading="lazy"
                      alt=""
                      src="/bankamex.svg"
                    />
                    <img
                      className="bankdiscover-icon"
                      loading="lazy"
                      alt=""
                      src="/bankdiscover.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="input-fields">
              <div className="inputs1">
                <div className="label8">Expiry</div>
                <input className="input2" type="text" />
              </div>
              <div className="inputs2">
                <div className="label9">CVC</div>
                <input className="input3" type="text" />
              </div>
            </div>
            <div className="input-fields1">
              <div className="inputs3">
                <div className="label10">Country</div>
                <div className="input4">
                  <div className="label11">
                    <div className="label12">United States</div>
                  </div>
                  <img
                    className="chevrondown-icon"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="inputs4">
                <input
                  className="label13"
                  placeholder="Postal code"
                  type="text"
                />
                <div className="input5">
                  <div className="label14">
                    <div className="label15">90210</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-4-icon"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className="image-3-icon"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className="image-2-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <h1 className="or">Or</h1>
          <div className="india">India</div>
          <div className="card-details-image">640924</div>
          <div className="cvc">CVC</div>
          <div className="mm-yy">MM / YY</div>
          <h2 className="select-any-one-container">
            <p className="select-any-one">{`Select any one payment option `}</p>
            <p className="from-abobe">from abobe ...!</p>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
