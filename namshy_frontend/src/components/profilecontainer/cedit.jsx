import React from "react";
import "./styles/credit.css";
const Credit = () => {
  return (
    <div>
      <div className="HEAD">
        <a href="/">
          <div className="headtext">
            <img src="https://a.namshicdn.com/my/assets/04cb5fd74e10d0def686.svg" />
            <div>المحفظة</div>
          </div>
        </a>
      </div>
      <div className="info-rectangle">
        <p>الرصيد الحالي</p>
        <h3>
          0.00 د.ك<span className="info-rectangle-desc">(0.00 $)</span>
        </h3>
      </div>
      <div className="padbot">
        <div style={{    "margin-bottom": "20px"}}>
          <div className="alert-banner">
            <div className="alert-banner-content">
              اعتبارًا من 1 فبراير 2023 ، يمكنك فقط دفع ما يصل إلى 15٪ من إجمالي
              قيمة طلبك باستخدام نمشي كاش
            </div>
            <div className="alert-banner-cta">تم</div>
          </div>
        </div>
        <div >
          <div className="sc-iveFHk kPnVKt list-item-wrapper list-item-wrapper-border-bottom">
            <div>
              <div className="wallet-item">
                <div className="sc-bBABsx cwFrfs wallet-item-icon wallet-item-icon-bg">
                  <img src="https://a.namshicdn.com/my/assets/d50fcff5d47fe6fa97c8.svg" />
                </div>
                <div className="w-100">
                  <div className="wallet-item-content">
                    <div className="wallet-item-content-main">
                      <div className="item-title">رصيد نمشي</div>
                      <div className="ctooltip">
                        <img
                          className="info-icon"
                          src="https://a.namshicdn.com/my/assets/d75ae950b7123ed7120c.svg"
                        />
                        <div
                          className="sc-fLcnxK kpNcee ctooltip-content"
                          direction="bottom"
                          color="black"
                        >
                          هذا هو المال الذي حصلت عليه من خلال المبالغ المستردة
                          وبطاقات الهدايا
                        </div>
                      </div>
                    </div>
                    <a href="/credit/credit">
                      <div className="wallet-item-content-end clickable">
                        <div className="wallet-item-value">
                          0.00 د.ك
                          <div className="wallet-item-value-secondary">
                            (0.00 $)
                          </div>
                        </div>
                        <div className="wallet-item-main-btn">
                          <img src="https://a.namshicdn.com/my/assets/6787a259f441dc0a339b.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-iveFHk fiEwVl list-item-wrapper ">
            <div>
              <div className="wallet-item">
                <div className="sc-bBABsx cwFrfs wallet-item-icon wallet-item-icon-bg">
                  <img src="https://a.namshicdn.com/my/assets/7ea8f134934f82d6ed21.svg" />
                </div>
                <div className="w-100">
                  <div className="wallet-item-content">
                    <div className="wallet-item-content-main">
                      <div className="item-title">نمشي كاش</div>
                      <div className="ctooltip">
                        <img
                          className="info-icon"
                          src="https://a.namshicdn.com/my/assets/d75ae950b7123ed7120c.svg"
                        />
                        <div
                          className="sc-fLcnxK kpNcee ctooltip-content"
                          direction="bottom"
                          color="black"
                        >
                          هذا هو النقد الترويجي الذي تتلقاه كجزء من العروض
                          الترويجية، وسيكون له تاريخ انتهاء صلاحية محدد.
                        </div>
                      </div>
                    </div>
                    <a href="/credit/cash">
                      <div className="wallet-item-content-end clickable">
                        <div className="wallet-item-value">
                          0.00 د.ك
                          <div className="wallet-item-value-secondary">
                            (0.00 $)
                          </div>
                        </div>
                        <div className="wallet-item-main-btn">
                          <img src="https://a.namshicdn.com/my/assets/6787a259f441dc0a339b.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet_container">
          <div>
            <div className="wallet-item">
              <div className="sc-bBABsx cwFrfs wallet-item-icon wallet-item-icon-bg">
                <img src="https://a.namshicdn.com/my/assets/a7e929152f10f0528182.svg" />
              </div>
              <div className="w-100">
                <div className="wallet-item-content">
                  <div className="wallet-item-content-main">
                    <div className="giftcard-box">
                      <div>
                        <div className="giftcard-box-title">
                          هل لديك بطاقة هدية؟
                        </div>
                        <p className="giftcard-box-desc">
                          قم بإضافتها في محفظة نمشي لدفع طلبياتك
                        </p>
                      </div>
                      <span className="giftcard-box-link link">
                        أضف رصيد بطاقة هدية
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 white-box p-lg-rbl-30 credit-tabs">
          <div className="nm-tabs">
            <div className="nm-tab">
              <div className="nm-tabs-title active">الكل</div>
            </div>
            <div className="nm-tab disabled">
              <div className="nm-tabs-title">رصيد نمشي</div>
            </div>
            <div className="nm-tab disabled">
              <div className="nm-tabs-title">نمشي كاش</div>
            </div>
          </div>
          <div className="emptylist-box">
            <div className="emptylist-box-content">
              <img src="https://a.namshicdn.com/my/assets/99a04940ba8d15143363.png" />
              <p>ليس لديك أي معاملات حتى الآن</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Credit;
