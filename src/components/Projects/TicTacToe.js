import React, { Component } from "react";
//import GIATimesheetscreenShot from "../../screenshots/GIA-Timesheet.png";
import { Carousel } from 'react-responsive-carousel';
import TicTacToe_Account1 from "../../screenshots/TicTacToe_Account1.png";
import TicTacToe_Account2 from "../../screenshots/TicTacToe_Account2.png";
import TicTacToe_Gameplay2 from "../../screenshots/TicTacToe_Gameplay2.png";
import TicTacToe_StartingPage from "../../screenshots/TicTacToe_StartingPage.png";

class TicTacToe extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Carousel >
									<div>
                  			<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem', height: "50%"}} src={TicTacToe_StartingPage} alt="Connect 3 img 1"/>
                  </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={TicTacToe_Account1} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={TicTacToe_Account2} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={TicTacToe_Gameplay2} alt="Connect 3 img 2"/>
                    </div>
							</Carousel>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2 style={{display: "inline-block", paddingRight: "10px"}}>TicTacToe</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/TicTacToe-in-Solidity" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
										<a style={{marginLeft: "10px"}}
											 class="btn btn-primary"
											 href="https://elihabash23.github.io/Blockchain-TicTacToe-Game/"
											 target="_blank"
                       rel="noopener noreferrer">
												Play Game
										</a>
                <h4> Full Stack Developer </h4>
                <div className="project-description">
                  <p>
										A version of TicTacToe written in Solidity, HTML, CSS, and Javascript, running on the Ethereum blockchain.
                  </p>
                  <p>
										Two players are needed to play, where each player will pay 0.1 ether to play a game against each other, 
										winner takes all. The game keeps track of the addresses with the highest amount of wins.
                  </p>
									<p>
										Utilizes MetaMask to manage your Ethereum wallet. 
									</p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>CSS</li>
                    <li>Ether</li>
										<li>Ganache</li>
										<li>HTML</li>
                    <li>Javascript</li>
                  </ul>
									<ul className="skills">
										<li>Solidity</li>
                    <li>Truffle</li>
                    <li>Web3</li>
									</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default TicTacToe;
