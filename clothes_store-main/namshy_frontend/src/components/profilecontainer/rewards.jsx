import React from "react";
import "./styles/rewards.css";
const Rewards = () => {
  return (
    <div class="Loyalty">
      <div class="HEAD">
        <div class="headtext">My Rewards</div>
      </div>
      <div class="Loyalty__grid">
        <div class="Loyalty__grid">
          <div class="LoyaltyDashboard">
            <div class="LoyaltyCard LoyaltyCard--no-hover">
              <div class="Rewards">
                <div class="Rewards__title">Silver Level</div>
              </div>
            </div>
            <div class="LoyaltyDashboard__rewards section section--no-padding">
              <div class="">
                <div class="LD-rewards-title">
                  <strong>My Rewards</strong>
                </div>
              </div>
              <div class="LD-rewards-panel">
                <div class="LD-reward-tier">
                  <div class="LD-reward-tier-promotions">
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
                          25% off
                        </strong>
                        <p id="loyalty-reward-block-duration">
                          On your first order
                        </p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          Activate Reward{" "}
                        </strong>
                      </div>
                    </div>
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
25% off
                        </strong>
                        <p id="loyalty-reward-block-duration">
on your next order in 24 hours                        </p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          Activate Reward{" "}
                        </strong>
                      </div>
                    </div>
                    <div class="LD-reward-block">
                      <div class="LD-reward-block-details">
                        <strong id="loyalty-reward-block-amount">
Up to 20%                        </strong>
                        <p id="loyalty-reward-block-duration">Spend & save</p>
                      </div>
                      <div class="LD-reward-block-button">
                        <strong id="loyalty-reward-block-activation">
                          Activate Reward{" "}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rewards;
