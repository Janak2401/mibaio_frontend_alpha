//import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import home4 from "./home4.png";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import "aos/dist/aos.css";
import "../css/selection.css";
import "../style.css";
// import "../finalcss.css";
import "../css/newcss.css";
import sample1 from "./Sample1.png";
import WOW from "wowjs";
import alpha1 from "./Alpha-Concept_1-black-front.png";
import offset from "./Alpha-Concept_1-offset.png";
import girlvideo from "./newgirl.mp4";
import extensionphonevid from "./extensionphone.mp4";
import alexaphone from "./alexaphone.gif";
// import black from "./images/blue.png"
import extensionvid from "./Event.mp4";
import alexagif from "./Hi-Alexa.gif";
import surgeproof from "./Surge-proof.png";
import modeposter from "./3Modeposter.png";
import Chevron from "react-chevron";
import { faArrowDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../components/navigationbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import MyOwlCarousel from "./owlCarousel";
import CustomFooter from "../components/customfooter";
import blueTheme from "./Home-screen.mp4";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		AOS.init();
		AOS.refresh();
		defineLordIconElement(loadAnimation);
	}, []);

	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);

	const [selected, setSelected] = useState(null);

	const [toggleState, setToggleState] = useState(false);

	const [frameSize, setFrameSize] = useState(3);

	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	const [src, setSrc] = useState("big");
	useEffect(() => {
		window.addEventListener("resize", (e) => {
			if (window.innerWidth <= 990) {
				setFrameSize(1);
			} else {
				setFrameSize(3);
			}

			if (window.innerWidth >= 800) {
				setSrc("big");
			} else {
				setSrc("small");
			}
		});
	}, []);

	// const getVideoSrc = width => {
	//     if (width >= 800)
	//         return extensionvid;
	//     return extensionphonevid;

	// };

	// const src = getVideoSrc(window.innerWidth);

	return (
		<>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="qxN6Cw6qgLk"
				onClose={() => setIsOpen(false)}
			/>
			<div>
				{/* <div className="preloader loaded" id="loading">
                    <div className="preloader-body">
                        <div id="loading-center-object">
                            <div className="object" id="object_four" />
                            <div className="object" id="object_three" />
                            <div className="object" id="object_two" />
                            <div className="object" id="object_one" />
                        </div>
                    </div>
                </div> */}
				<div className="page ">
					<section
						className="section page-header-1 header-section"
						style={{ background: "#434343" }}
					>
						{/* current almost perfect navbar */}

						<NavigationBar />

						<div id="belownavbar" className="box-custom-4 bg-default">
							<div className="box-custom-4-aside bg-accent">
								<div className="box-custom-4-aside-decoration">
									<div className="box-custom-4-aside-decoration-bg wow clipInLeft"></div>
									<div className="box-custom-4-icon-outer">
										<span className="box-custom-4-icon"></span>
									</div>
								</div>
								<div
									className="box-custom-4-aside-content wow fadeInRightSmall"
									data-wow-delay=".8s"
								>
									<div className="iphone-frame-4-group">
										<div
											id="carouselExampleSlidesOnly"
											className="carousel slide"
											data-ride="carousel"
											data-easing="ease-in-out"
											data-autoplay="true"
											data-autoplay-timeout="3500"
											data-mouse-drag="true"
										>
											<div className="carousel-inner">
												{/* <div className="carousel-item active">
                                  <img className="d-block w-100" style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} src={alpha1} alt="First slide"/>
                                </div> */}

												<video
													width="100%"
													loop
													autoPlay
													muted
													style={{
														alignContent: "center",
													}}
												>
													<source src={blueTheme} type="video/mp4" />
												</video>

												{/* <div className="carousel-item">
                                  <img className="d-block" src={offset} alt="Third slide" style={{backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}/>
                                </div> */}
											</div>
										</div>
										<div className="iphone-frame-4-next element-process">
											<script src="https://cdn.lordicon.com/lusqsztk.js"></script>
											<lord-icon
												src="https://cdn.lordicon.com/wxnxiano.json"
												trigger="loop"
												delay="175"
												speed=".5"
												colors="primary:#ffffff,secondary:#0accbe"
												style={{
													width: "40px",
													height: "40px",
												}}
											></lord-icon>
											{/* <span className="icon icon-lg linearicons-envelope" /> */}
											<a href="MIBAiO Brochure.pdf" target="_blank">
												<h5 className="text-white iphone-frame-4-next-text">
													Brochure
												</h5>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="box-custom-4-main">
								<div className="block-10">
									<h2
										className="font-weight-bold heading-decoration-2 wow fadeInUp"
										data-wow-delay=".4s"
										style={{
											visibility: "visible",
											animationDelay: "0.4s",
											animationName: "fadeInUp",
										}}
									>
										<span className="text-white">Automate Your</span>
									</h2>
									<h2
										className="extra-light text-white heading-decoration-3 wow fadeInUp"
										data-wow-delay=".4s"
										style={{
											visibility: "visible",
											animationDelay: "0.4s",
											animationName: "fadeInUp",
										}}
									>
										{/* <span
                                            className="typed-text text-primary"
                                            data-strings='["phone", "home", " electrical appliances", "lifestyle", "smartphone", "fingers"]'
                                            data-type-speed={60}
                                        >
                                            home
                                        </span> */}
										<Typewriter
											options={{
												strings: [
													"home",
													"routine tasks",
													"appliances",
													"lifestyle",
													"office",
													"fingers",
												],
												autoStart: true,
												loop: true,
												wrapperClassName: "text-primary notranslate",
												cursorClassName: "typed-cursor typed-cursor--blink",
											}}
											initDelay={1000}
										/>
										{/* <span className="typed-cursor typed-cursor--blink">
                                            |
                                        </span> */}
									</h2>
									<br />
									<div
										className="wow fadeInUp"
										data-wow-delay=".9s"
										style={{
											visibility: "visible",
											animationDelay: "0.9s",
											animationName: "fadeInUp",
										}}
									>
										<p
											className="text-white-50 big wow clipInLeft"
											data-wow-delay="1.0s"
											style={{
												visibility: "visible",
												animationDelay: "1s",
												animationName: "clipInLeft",
											}}
										>
											Upgrade your existing conventional electrical appliances
											to a set of smart appliances! Control & monitor from any
											part of the world with your smartphone!
										</p>
									</div>
									<br />
									<div
										className="group wow clipInLeft wow fadeInUp"
										data-wow-delay="1.3s"
										style={{
											visibility: "visible",
											animationDelay: "1.3s",
											animationName: "clipInLeft",
										}}
									>
										<a
											className="button button-default-outline button-winona"
											href="#"
											data-wow-duration=".5s"
											data-wow-delay=".5s"
											style={{
												margin: "10px",
											}}
										>
											<div className="content-original">
												<div className="content-original">Read More</div>
												<div className="content-dubbed">Read More</div>
											</div>
											<div className="content-dubbed">
												<div className="content-original">Read More</div>
												<div className="content-dubbed">Read More</div>
											</div>
										</a>
										<Link
											to="/view"
											className="button button-icon button-icon-right button-secondary button-winona wow clipInLeft wow fadeInUp"
											data-wow-delay="1.3s"
											href="#"
											data-wow-duration=".5s"
											style={{
												visibility: "visible",
												animationDuration: "0.5s",
												animationDelay: "1.3s",
												animationName: "clipInLeft",
												margin: "10px",
											}}
										>
											<div className="content-original">Buy Now</div>
											<div className="content-dubbed">Buy Now</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/*
                            <div className="container text-center">
                                <span
                                    className="normal text-primary font-weight-bold text-uppercase wow fadeIn"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    Our Product
                                </span>
                                
                                <h3
                                    className="offset-top-7 font-weight-regular wow fadeIn"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeIn",
                                    }}
                                >
                                    Introducing MIBAiO S series
                                </h3>
                                
                               <div className="introducing_4s">
                                   
                                    <button className="elipse_20"></button>
                                    <button className="elipse_24"></button>
                                    <button className="elipse_25"></button>
                                    <button className="elipse_26"></button>                                  
                               
                            </div> 
                                */}

					<section
						id="services"
						className="services section-md section-bg"
						style={{
							background: "linear-gradient(180deg, #434343, #000000)",
						}}
					>
						<div className="container">
							{/* <section> */}

							<section>
								<h2
									className="offset-top-7 text-center font-weight-regular wow fadeInUp"
									style={{
										background:
											"linear-gradient(270deg, #63DDD1 0%, #1F2EB1 137.5%)",

										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
									}}
									data-wow-delay=".4s"
								>
									Xtension 4S
								</h2>
								<h5
									className="text-center wow-animation wow fadeIn"
									data-wow-delay=".4s"
									style={{
										marginBottom: "20px",
										color: "#f1f1f1",
									}}
								>
									Designed to simplify your life
								</h5>

								<div
									className="row features-small mb-5 mt-3 wow fadeIn"
									data-wow-delay=".6s"
								>
									<div className="col-md-4">
										<div className="row">
											<div className="col-2">
												<i
													className="fas mdi mdi-router-wireless"
													style={{ fontSize: "20px" }}
												></i>
											</div>
											<div className="col-10">
												<h6
													className="feature-title"
													style={{ color: "#BDD4E7" }}
												>
													No Hub required
												</h6>
												<p className="grey-text">
													Does not need any additional hub to connect to
													internet, works with any 2.4Ghz compatible WiFi
													router.
												</p>
												<div style={{ height: "15px" }}></div>
											</div>
										</div>

										<div className="row">
											<div className="col-2">
												<i
													className="mdi mdi-repeat-off"
													style={{ fontSize: "20px" }}
												></i>
											</div>
											<div className="col-10">
												<h6
													className="feature-title"
													style={{ color: "#BDD4E7" }}
												>
													No rewiring
												</h6>
												<p className="grey-text">
													Does not need additional rewiring. Easy to install,
													plug and play!
												</p>
												<div style={{ height: "15px" }}></div>
											</div>
										</div>
									</div>

									<div className="col-md-4 flex-center">
										<img
											src={sample1}
											alt="MIBAiO Xtension 4S white"
											className="z-depth-0 img-fluid wow fadeInUp"
											data-wow-delay=".5s"
										/>
									</div>

									<div className="col-md-4 mt-2">
										<div className="row">
											<div className="col-2">
												<i
													className="fas mdi 2x mdi-bluetooth-audio"
													style={{ fontSize: "20px" }}
												></i>
											</div>
											<div className="col-10">
												<h6
													className="feature-title"
													style={{ color: "#BDD4E7" }}
												>
													Dual Connectivity
												</h6>
												<p className="grey-text">
													Bluetooth + WiFi hybrid mode ensures that it works
													flawlessly with and without internet.
												</p>
												<div style={{ height: "15px" }}></div>
											</div>
										</div>

										<div className="row">
											<div className="col-2">
												<i
													className="fas mdi 2x mdi-chart-line"
													style={{ fontSize: "20px" }}
												></i>
											</div>
											<div className="col-10">
												<h6
													className="feature-title"
													style={{ color: "#BDD4E7" }}
												>
													Energy monitoring
												</h6>
												<p className="grey-text">
													Monitor your energy consumption and estimate the cost
													of electricity bills.
												</p>
												<div style={{ height: "15px" }}></div>
											</div>
										</div>
									</div>
								</div>
							</section>

							<div className="row" style={{ marginTop: "-10%;" }}>
								<div
									className="col-md-6 col-lg-3 wow fadeInUp"
									data-aos="fade-up"
									data-wow-delay=".3s"
								>
									<div className="icon-box">
										<div className="icon">
											<a href="#Security">
												{/* <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script> */}
												<lord-icon
													src="https://cdn.lordicon.com/kbtmbyzy.json"
													trigger="loop"
													colors="primary:#ffffff,secondary:#4af0ba"
													speed=".7"
													style={{
														width: "50px",
														height: "50px",
													}}
												></lord-icon>
											</a>
										</div>
										<h4 style={{ color: "#BDD4E7" }}>
											<a href="#Security">Automation</a>
										</h4>
										<p className="description">
											Schedule your appliances to turn on/off automatically at
											desired timing. Indivisually or simultaneously!🕖{" "}
										</p>
									</div>
								</div>
								<div
									className="col-md-6 col-lg-3 wow fadeInUp"
									data-aos="fade-up"
									data-wow-delay=".4s"
								>
									<div className="icon-box">
										<div className="icon">
											<a href="#Voice">
												<script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
												<lord-icon
													src="https://cdn.lordicon.com/fpipqhrr.json"
													trigger="loop"
													colors="primary:#ffffff,secondary:#4af0ba"
													speed=".7"
													stroke={58}
													style={{
														width: "50px",
														height: "50px",
													}}
												></lord-icon>
											</a>
										</div>
										<h4 style={{ color: "#BDD4E7" }}>
											<a href="#Voice">Voice Control</a>
										</h4>
										<p className="description">
											Relax yourself completely, 🗣 Let your voice do the job!
											<br /> <br />{" "}
											<span
												style={{
													fontSize: " 12px",
													opacity: " .8",
												}}
											>
												(PS: Works with Alexa, Siri & Google)
											</span>
										</p>
									</div>
								</div>
								<div
									className="col-md-6 col-lg-3 wow fadeInUp"
									data-aos="fade-up"
									data-wow-delay=".5s"
								>
									<div className="icon-box">
										<div className="icon">
											<a href="#MMC">
												<script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
												<lord-icon
													className="lord"
													src="https://cdn.lordicon.com/gaqzgxto.json"
													trigger="loop"
													colors="primary:#ffffff,secondary:#4af0ba"
													speed=".8"
													style={{
														width: "50px",
														height: "50px",
													}}
												></lord-icon>
											</a>
										</div>
										<h4 style={{ color: "#BDD4E7" }}>
											<a href="#MMC">Energy Efficient</a>
										</h4>
										<p className="description">
											Energy savings and advancements you never imagined! Save
											upto 26% of your energy biils! 💚{" "}
										</p>
									</div>
								</div>
								<div
									className="col-md-6 col-lg-3 wow fadeInUp"
									data-aos="fade-up"
									data-wow-delay=".6s"
								>
									<div className="icon-box">
										<div className="icon">
											<a href="#Surge">
												<script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
												<lord-icon
													src="https://cdn.lordicon.com/iswjnpyk.json"
													trigger="loop"
													colors="primary:#ffffff,secondary:#4af0ba"
													state="hover"
													speed=".5"
													style={{
														width: "50px",
														height: "50px",
													}}
												></lord-icon>
											</a>
										</div>
										<h4 style={{ color: "#BDD4E7" }}>
											<a href="#Surge">Shared Access</a>
										</h4>
										<p className="description">
											Share devices with your family 👨‍👩‍👦, sync state of devices,
											set more smart scenes for any space.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<picture>
						{src === "small" && (
							<video
								style={{
									width: "100%",
									transitionDelay: "1s",
									marginBottom: "-6%",
								}}
								loop
								autoPlay
								muted
								playsInline
							>
								<source src={extensionphonevid} type="video/mp4" />
							</video>
						)}
						{src === "big" && (
							<video
								style={{
									width: "100%",
									transitionDelay: "1s",
									marginBottom: "-6%",
								}}
								loop
								autoPlay
								muted
								playsInline
							>
								<source src={extensionvid} type="video/mp4" />
							</video>
						)}
						{/* <video style={{
                                width: "100%",
                                transitionDelay: "1s",
                                marginBottom: "-6%",
                            }} autoplay playsInline muted>
                                <source 
                            src={extensionvid}
                            type="video/mp4"/>
                            </video> */}
					</picture>
					{/* <img src={alexagif} style={{minWidth:"100%"}} /> */}
					{/* <img src={alexaphone} srcSet={`${alexaphone} 800w, ${alexagif} 1360w`} /> */}
					<section className="section section-md bg-gray-100">
						<h3
							className="wow fadeInUp"
							data-wow-delay=".4s"
							style={{
								textAlign: "center",
								paddingTop: "32px",
								color: "#697484",
							}}
						>
							Title Here
						</h3>

						<picture>
							<source media="(min-width:800px)" srcSet={alexagif}></source>
							<img
								src={alexaphone}
								style={{
									width: "100%",
								}}
							/>
						</picture>
					</section>
					{/* <img src={alexaphone} style={alexaphonestyle} />  */}

					<section className="section section-md bg-gray-100">
						<h3
							className="wow fadeInUp"
							data-wow-delay=".4s"
							style={{
								textAlign: "center",
								marginBottom: "50px",
								color: "#697484",
							}}
						>
							Our <span style={{ color: "#0accbe" }}>most prominent </span>
							features
						</h3>

						<div className="container" id="Surge">
							<div className="row row-50 justify-content-xl-between align-items-center">
								<div
									className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
									data-wow-delay=".5s"
								>
									<div className="unit unit-spacing-1 align-items-center">
										<div className="unit-left">
											<div className="icon icon-style-1 mdi mdi-flash"></div>
										</div>
										<div className="unit-body">
											<h3>Surge Proof</h3>
										</div>
									</div>
									<div className="block-4 offset-top-4">
										<p className="big"></p>
										<blockquote className="quote-light">
											<div className="quote-light-text">
												<p>
													MIBAiO Xtension 4S is equipped with a Positive
													Temperature Coefficient Thermister (PTC) to protect
													your electrical appliances from accidental voltage
													spikes in alternating current (AC) circuits
												</p>
											</div>
										</blockquote>
									</div>
								</div>
								<div
									className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
									data-wow-delay=".6s"
								>
									<div className="item">
										<img
											className="d-block w-100"
											src={surgeproof}
											alt="Surge-proof-Xtension4S"
											width="456"
											height="456"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="container" id="MMC">
							<div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
								<div className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall">
									<div className="unit unit-spacing-1 align-items-center">
										<div className="unit-left">
											<div className="icon icon-style-1 mdi mdi-access-point-network"></div>
										</div>
										<div className="unit-body">
											<h3>Multi-Mode Control</h3>
										</div>
									</div>
									<div className="block-4 offset-top-4">
										<p className="big"></p>
										<blockquote className="quote-light">
											<div className="quote-light-text">
												<p>
													In addition to the conventional physical button
													switching, MIBAiO Smart app additionally enables you
													to remotely control your smart appliances with:
													<br />
													<br />
													<div className="icon icon-style-1 mdi mdi-wifi"></div>{" "}
													Internet <br />
													<br />
													<div className="icon icon-style-1 mdi mdi-bluetooth"></div>{" "}
													Bluetooth
												</p>
												<div className="group-buttons-responsive group-middle">
													<a
														className="button button-secondary button-winona"
														href="product.php"
													>
														View All Features
													</a>
													<a
														className="button button-default-outline button-winona"
														style={{
															color: "#0accbe",
														}}
														href="product.php"
													>
														Learn More
													</a>
												</div>
											</div>
										</blockquote>
									</div>
								</div>

								<div className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern">
									<img
										className="d-block w-100"
										src={modeposter}
										alt="AI Chip image"
									/>
								</div>
							</div>
						</div>
					</section>

					<section
						className="parallax-container section-lg section-box-custom-3 section-bottom-0 text-center"
						data-parallax-img="images/bg-image-1.jpg"
					>
						<div className="material-parallax parallax">
							<img
								src="images/bg-image-1.jpg"
								alt=""
								style={{ display: "block" }}
							/>
						</div>
						<div className="parallax-content">
							<div className=" container context-dark">
								<span
									className="normal text-white font-weight-bold text-uppercase wow fadeIn"
									style={{ animationName: "none" }}
								>
									About MIBAiO
								</span>
								<h3
									className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn"
									data-wow-delay=".1s"
									style={{
										animationDelay: "0.1s",
										animationName: "none",
									}}
								>
									<span>MIBAiO</span>
									<Typewriter
										options={{
											strings: [
												"is a startup",
												"strives towards innovation",
												"automates your existing home appliances",
												"upgrades your lifestyle",
												"delivers you delightful experiences",
												"is designed for you",
											],
											autoStart: true,
											loop: true,
											wrapperClassName: "text-primary",
											cursorClassName: "typed-cursor typed-cursor--blink",
										}}
										initDelay={1000}
									/>
								</h3>
								<p
									className="wow fadeIn"
									data-wow-delay=".2s"
									style={{
										animationDelay: "0.2s",
										animationName: "none",
									}}
								>
									<span style={{ maxWidth: "800px" }}>
										We are on a mission to transform the Smart Home Ecosystem in
										India <br />
										And we invite you to take a front seat in this revolution
									</span>
								</p>
								{/* <a className="button-play mdi mdi-play mdi-24px wow fadeIn" href="https://youtu.be/qxN6Cw6qgLk" data-lightgallery="item" data-wow-delay=".3s">
                            <svg className="button-play-shape" width="86" height="86" viewbox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                                <rect x="1" y="1" width="86" height="86" rx="6" ry="6"></rect>
                            </svg></a>  */}
								<div
									id="play-video"
									className="video-play-button"
									onClick={() => setIsOpen(true)}
									style={{
										cursor: "pointer",
									}}
								>
									<span />
								</div>
								<div id="video-overlay" className="video-overlay-class">
									{/* <a className="video-overlay-close">&times;</a> */}
								</div>
							</div>
							<div className="box-custom-3-container container wow slideInUpSmall">
								<div className="box-custom-3">
									<div className="layout-bordered-1">
										<div className="layout-bordered-1-item">
											{/* Counter Classic */}
											<article
												className="counter-classic wow clipInLeft"
												style={{
													animationName: "none",
												}}
											>
												<div className="counter-classic-main">
													<div className="counter">3</div>
													<span className="small text-primary">+</span>
												</div>
												<h4 className="counter-classic-title text-black extra-lighter">
													Modes <br /> of control
												</h4>
											</article>
										</div>
										<div className="layout-bordered-1-item">
											Counter Classic
											<article
												className="counter-classic wow clipInLeft"
												data-wow-delay=".1s"
												style={{
													animationDelay: "0.1s",
													animationName: "none",
												}}
											>
												<div className="counter-classic-main">
													<div className="counter">14</div>
													<span className="small text-primary">k</span>
												</div>
												<h4 className="counter-classic-title extra-lighter">
													Lines <br /> of code
												</h4>
											</article>
										</div>
										<div className="layout-bordered-1-item">
											Counter Classic
											<article
												className="counter-classic wow clipInLeft"
												data-wow-delay=".2s"
												style={{
													animationDelay: "0.2s",
													animationName: "none",
												}}
											>
												<div className="counter-classic-main">
													<div className="counter">5</div>
													<span className="small text-primary">yrs</span>
												</div>
												<h4 className="counter-classic-title extra-lighter">
													Of warranty <br /> MIBAiO guarantee
												</h4>
											</article>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id="why-us" className="why-us section-bg1 wow fadeInUp">
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
									<div className="content">
										<h3>
											How does MIBAiO{" "}
											<span style={{ color: "#0accbe" }}>benefit you?</span>
										</h3>
										<br />
										<h5 style={{ color: "#697484" }}>
											Here's where we tell how MIBAiO Xtension 4S truely{" "}
											<span style={{ color: "#4a80f0" }}>adds value</span> to
											your life!
										</h5>
									</div>
									<br />

									<br />
									{/* <div className="wrapper">
                                        <div className="accordion">
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(1)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            01&nbsp; &nbsp;
                                                        </span>
                                                        Comfort
                                                    </h4>
                                                    <span
                                                        style={{
                                                            fontSize: 30,
                                                        }}
                                                    >
                                                        {selected == 1
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>

                                                <div
                                                    className={
                                                        selected === 1
                                                            ? "Accorcontent show"
                                                            : "Accorcontent"
                                                    }
                                                >
                                                    Control and keep an eye on
                                                    your electricals from
                                                    anywhere
                                                    <br />
                                                    Do it with your voice! or
                                                    your fingertips.
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(2)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            02&nbsp; &nbsp;
                                                        </span>
                                                        Convenience
                                                    </h4>
                                                    <span
                                                        style={{
                                                            fontSize: 30,
                                                        }}
                                                    >
                                                        {selected === 2
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        selected == 2
                                                            ? "Accorcontent show"
                                                            : "Accorcontent"
                                                    }
                                                >
                                                    Easy to install.
                                                    <br />
                                                    Easy to operate... Makes
                                                    life simple!
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div
                                                    className="title"
                                                    onClick={() => toggle(3)}
                                                >
                                                    <h4
                                                        style={{
                                                            fontSize: "20px",
                                                            paddingLeft: "20px",
                                                            paddingTop: "20px",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "#0accbe",
                                                            }}
                                                        >
                                                            03&nbsp; &nbsp;
                                                        </span>
                                                        ROI [Return on
                                                        Investment]?
                                                    </h4>
                                                    <span
                                                        style={{
                                                            fontSize: 30,
                                                        }}
                                                    >
                                                        {selected === 3
                                                            ? "-"
                                                            : "+"}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        selected == 3
                                                            ? "Accorcontent show"
                                                            : "Accorcontent"
                                                    }
                                                >
                                                    With uptp 26% savings on
                                                    energy bills per month,
                                                    you'll recover the amount
                                                    invested roughly in about 7
                                                    months*..!
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

									<div className="accordion-list">
										<div
											className="card-group-custom card-group-classic card-group-classic_1"
											role="tablist"
											aria-multiselectable="false"
										>
											<article className="card card-custom card-classic">
												<div
													className="card-header"
													id="app-accordion-heading-4"
													role="tab"
												>
													<div className="card-title">
														<a
															className="card-link"
															role="button"
															data-toggle="collapse"
															href="#app-accordion-collapse-4"
															aria-controls="app-accordion-collapse-4"
															aria-expanded="true"
														>
															<span
																style={{
																	color: "#0accbe",
																}}
															>
																01
															</span>{" "}
															&nbsp; Comfort
															<div className="card-arrow"></div>
														</a>
													</div>
												</div>
												<div
													className="collapse show"
													id="app-accordion-collapse-4"
													role="tabpanel"
													aria-labelledby="app-accordion-heading-4"
													data-parent="#app-accordion"
												>
													<div className="card-body">
														<p>
															Control and keep an eye on your electricals from
															anywhere
															<br />
															Do it with your voice! or your fingertips.
														</p>
													</div>
												</div>
											</article>

											<article className="card card-custom card-classic">
												<div
													className="card-header"
													id="app-accordion-heading-1"
													role="tab"
												>
													<div className="card-title">
														<a
															className="card-link collapsed"
															role="button"
															data-toggle="collapse"
															href="#app-accordion-collapse-1"
															aria-controls="app-accordion-collapse-1"
															aria-expanded="false"
														>
															<span
																style={{
																	color: "#0accbe",
																}}
															>
																02
															</span>{" "}
															&nbsp; Convenience
															<div className="card-arrow"></div>
														</a>
													</div>
												</div>
												<div
													className="collapse"
													id="app-accordion-collapse-1"
													role="tabpanel"
													aria-labelledby="app-accordion-heading-1"
													data-parent="#app-accordion"
												>
													<div className="card-body">
														<p>
															Easy to install.
															<br />
															Easy to operate... Makes life simple!
														</p>
													</div>
												</div>
											</article>

											<article className="card card-custom card-classic">
												<div
													className="card-header"
													id="app-accordion-heading-2"
													role="tab"
												>
													<div className="card-title">
														<a
															className="card-link collapsed"
															role="button"
															data-toggle="collapse"
															href="#app-accordion-collapse-2"
															aria-controls="app-accordion-collapse-2"
															aria-expanded="false"
														>
															<span
																style={{
																	color: "#0accbe",
																}}
															>
																03
															</span>{" "}
															&nbsp; ROI [Return on Investment]?
															<div className="card-arrow"></div>
														</a>
													</div>
												</div>
												<div
													className="collapse"
													id="app-accordion-collapse-2"
													role="tabpanel"
													aria-labelledby="app-accordion-heading-2"
													data-parent="#app-accordion"
												>
													<div className="card-body">
														<p>
															With uptp 26% savings on energy bills per month,
															you'll recover the amount invested roughly in
															about 7 months*..!
														</p>
													</div>
												</div>
											</article>
										</div>
									</div>
								</div>

								<div
									className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
									style={{
										backgroundImage: ' url("images/Picture1.png")',
									}}
									data-aos="zoom-in"
									data-aos-delay="150"
								>
									&nbsp;
								</div>
							</div>
						</div>
					</section>

					<section
						className="parallax-container section-lg text-center"
						data-parallax-img="images/bg-image-2.jpg"
					>
						<div className="material-parallax parallax">
							<img
								src="images/bg-image-2.jpg"
								alt=""
								style={{ display: "block" }}
							/>
						</div>
						<div className="parallax-content">
							<div className="container context-dark">
								<span
									className="normal text-white font-weight-bold text-uppercase wow fadeIn"
									style={{ animationName: "none" }}
								>
									Pricing plans
								</span>
								<h3
									className="offset-top-7 wow fadeIn"
									data-wow-delay=".1s"
									style={{
										animationDelay: "0.1s",
										animationName: "none",
									}}
								>
									Grab your deal!🤑
								</h3>
								<p
									className="wow fadeIn"
									data-wow-delay=".25s"
									style={{
										animationDelay: "0.25s",
										animationName: "none",
									}}
								>
									<span style={{ maxWidth: "700px" }}>
										We've got you an offer we're sure you wont resist. 😎
									</span>
								</p>
								<div
									className="toggle-modern"
									aria-label="Pricing Switch Monthly/Yearly"
									id="pt-classic-toggle"
								>
									<div className="toggle-modern-text toggle-modern-text_default">
										Xtension 4S
									</div>
									<button
										className={
											"toggle-modern-switch content-toggle" +
											(toggleState && " active")
										}
										data-multitoggle="#pt-classic, #pt-classic-toggle"
										onClick={() => {
											setToggleState(!toggleState);
										}}
									>
										<span className="toggle-modern-switch-element" />
									</button>
									<div className="toggle-modern-text toggle-modern-text_alternate">
										Xtension 8S
									</div>
								</div>
							</div>
							<div className="container ot50">
								<div className="pt-classic-group" id="pt-classic">
									<div
										className="owl-carousel owl-carousel_type-2 owl-loaded"
										data-items={1}
										data-md-items={2}
										data-lg-items={3}
										data-dots="false"
										data-nav="true"
										data-stage-padding={0}
										data-loop="false"
										data-margin={30}
										data-lg-margin={20}
										data-xl-margin={30}
										data-mouse-drag="false"
										style={{}}
									>
										<OwlCarousel
											className="owl-theme"
											margin={30}
											items={frameSize}
											autoplay={true}
										>
											<article
												className="pt-classic wow slideInRightLg item"
												data-wow-delay=".5s"
												style={{
													animationDelay: "0.5s",
													animationName: "none",
													minWidth: "300px",
												}}
											>
												<h4 className="pt-classic-title">Pack of 1</h4>
												<div className="pt-classic-price-outer">
													<div
														className="pt-classic-price"
														aria-hidden={toggleState ? "true" : "false"}
													>
														<div className="pt-classic-price-currency font-weight-regular">
															{" "}
															₹
														</div>
														<div className="pt-classic-price-value extra-light">
															5499
														</div>
													</div>
													<div
														className="pt-classic-price"
														aria-hidden={toggleState ? "false" : "true"}
													>
														<div className="pt-classic-price-currency font-weight-regular">
															{" "}
															₹
														</div>
														<div className="pt-classic-price-value extra-light">
															5499
														</div>
													</div>
												</div>
												<div className="pt-classic-divider" />
												<ul className="pt-classic-list">
													<li>Control upto 4 appliances</li>
													<li>Ideal for 1 room</li>
													<li>Manual control</li>
													<li>Bluetooth control</li>
													<li>Internet control</li>
													<li>Voice control</li>
												</ul>
												<div className="pt-classic-footer">
													<a
														className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
														href="https://mibaio.in/#"
													>
														<div className="content-original">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>
														<div className="content-dubbed">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>
													</a>
												</div>
											</article>
											<article
												className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn item"
												style={{
													animationName: "none",
													minWidth: "300px",
												}}
											>
												<div className="pt-classic-header">
													<h4 className="pt-classic-title">Pack of 3</h4>
													<div className="pt-classic-price-outer">
														<div
															className="pt-classic-price"
															aria-hidden={toggleState ? "true" : "false"}
														>
															<div className="pt-classic-price-currency font-weight-regular">
																{" "}
																₹
															</div>
															<div className="pt-classic-price-value extra-light">
																15597
															</div>
														</div>
														<div
															className="pt-classic-price"
															aria-hidden={toggleState ? "false" : "true"}
														>
															<div className="pt-classic-price-currency font-weight-regular">
																{" "}
																₹
															</div>

															<div className="pt-classic-price-value extra-light">
																15597
															</div>
															<div
																style={{
																	width: "70%",
																	fontWeight: " 500",
																	color: "#0accbe",
																	background: " #d6f3f5",
																	letterSpacing: "0.075em",
																	fontSize: "20%",
																	display: "flex",
																	justifyContent: "center",
																	alignItems: "center",
																	height: "35px",
																}}
															>
																Save 20%
															</div>
														</div>
													</div>
												</div>
												<div className="pt-classic-divider" />
												<ul className="pt-classic-list">
													<li>Control upto 12 appliances</li>
													<li>Ideal for 2 BHK</li>
													<li>Manual Control</li>
													<li>Internet Control</li>
													<li>Bluetooth Control</li>
													<li>Voice control</li>
												</ul>
												<div className="pt-classic-footer">
													<a
														className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular"
														href="https://mibaio.in/#"
													>
														<div className="content-original">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>

														<div className="content-dubbed">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>
													</a>

													<p className="pt-classic-note">#Recommended</p>
												</div>
											</article>
											<article
												className="pt-classic pt-classic_style-3 wow slideInLeftLg"
												data-wow-delay=".5s"
												style={{
													animationDelay: "0.5s",
													animationName: "none",
												}}
											>
												<h4 className="pt-classic-title">Pack of 2</h4>
												<div className="pt-classic-price-outer">
													<div
														className="pt-classic-price"
														aria-hidden={toggleState ? "false" : "true"}
													>
														<div className="pt-classic-price-currency font-weight-regular">
															{" "}
															₹
														</div>
														<div className="pt-classic-price-value extra-light">
															10798
														</div>
													</div>
													<div
														className="pt-classic-price"
														aria-hidden={toggleState ? "true" : "false"}
													>
														<div className="pt-classic-price-currency font-weight-regular">
															{" "}
															₹
														</div>
														<div className="pt-classic-price-value extra-light">
															10798
														</div>
														<div className="badge badge-1">Save 12%</div>
													</div>
												</div>
												<div className="pt-classic-divider" />
												<ul className="pt-classic-list">
													<li>Control upto 8 appliances</li>
													<li>Ideal for 1 BHK</li>
													<li>Manual control</li>
													<li>Internet control</li>
													<li>Voice control</li>
													<li>Bluetooth control</li>
													<li>Upgrade more outputs</li>
												</ul>
												<div className="pt-classic-footer">
													<a
														className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
														href="https://mibaio.in/#"
													>
														<div className="content-original">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>
														<div className="content-dubbed">
															<span className="icon mdi mdi-arrow-right" />
															Select Plan
														</div>
													</a>
												</div>
											</article>
										</OwlCarousel>

										{/* <div className="owl-stage-outer">
                                            <div
                                                className="owl-stage"
                                                style={{
                                                    transform:
                                                        "translate3d(0px, 0px, 0px)",
                                                    transition:
                                                        "all 0s ease 0s",
                                                    width: "1200px",
                                                }}
                                            >
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-left"
                                                >
                                                    <article
                                                        className="pt-classic wow slideInRightLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Pack of 1
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "true"
                                                                        : "false"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    3433
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "false"
                                                                        : "true"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    6333
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 4
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 1 room
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li>
                                                                Internet control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-up"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-2 pt-classic_preferred wow scaleIn"
                                                        style={{
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <div className="pt-classic-header">
                                                            <h4 className="pt-classic-title">
                                                                Pack of 3
                                                            </h4>
                                                            <div className="pt-classic-price-outer">
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={
                                                                        toggleState
                                                                            ? "true"
                                                                            : "false"
                                                                    }
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>
                                                                    <div className="pt-classic-price-value extra-light">
                                                                        9999
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="pt-classic-price"
                                                                    aria-hidden={
                                                                        toggleState
                                                                            ? "false"
                                                                            : "true"
                                                                    }
                                                                >
                                                                    <div className="pt-classic-price-currency font-weight-regular">
                                                                        {" "}
                                                                        ₹
                                                                    </div>

                                                                    <div className="pt-classic-price-value extra-light">
                                                                        17999
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            width: "70%",
                                                                            fontWeight:
                                                                                " 500",
                                                                            color: "#0accbe",
                                                                            background:
                                                                                " #d6f3f5",
                                                                            letterSpacing:
                                                                                "0.075em",
                                                                            fontSize:
                                                                                "20%",
                                                                            display:
                                                                                "flex",
                                                                            justifyContent:
                                                                                "center",
                                                                            alignItems:
                                                                                "center",
                                                                            height: "35px",
                                                                        }}
                                                                    >
                                                                        Save 20%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 12
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 2 BHK
                                                            </li>
                                                            <li>
                                                                Manual Control
                                                            </li>
                                                            <li>
                                                                Internet Control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                Control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-secondary button-shadow button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>

                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                           
                                                            <p className="pt-classic-note">
                                                                #Recommended
                                                            </p>
                                                        </div>
                                                    </article>
                                                </div>
                                                <div
                                                    className="owl-item active"
                                                    style={{
                                                        width: "370px",
                                                        marginRight: "30px",
                                                    }}
                                                    data-aos="fade-right"
                                                >
                                                    <article
                                                        className="pt-classic pt-classic_style-3 wow slideInLeftLg"
                                                        data-wow-delay=".5s"
                                                        style={{
                                                            animationDelay:
                                                                "0.5s",
                                                            animationName:
                                                                "none",
                                                        }}
                                                    >
                                                        <h4 className="pt-classic-title">
                                                            Pack of 2
                                                        </h4>
                                                        <div className="pt-classic-price-outer">
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "false"
                                                                        : "true"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    13199
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="pt-classic-price"
                                                                aria-hidden={
                                                                    toggleState
                                                                        ? "true"
                                                                        : "false"
                                                                }
                                                            >
                                                                <div className="pt-classic-price-currency font-weight-regular">
                                                                    {" "}
                                                                    ₹
                                                                </div>
                                                                <div className="pt-classic-price-value extra-light">
                                                                    6833
                                                                </div>
                                                                <div className="badge badge-1">
                                                                    Save 12%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-classic-divider" />
                                                        <ul className="pt-classic-list">
                                                            <li>
                                                                Control upto 8
                                                                appliances
                                                            </li>
                                                            <li>
                                                                Ideal for 1 BHK
                                                            </li>
                                                            <li>
                                                                Manual control
                                                            </li>
                                                            <li>
                                                                Internet control
                                                            </li>
                                                            <li>
                                                                Voice control
                                                            </li>
                                                            <li>
                                                                Bluetooth
                                                                control
                                                            </li>
                                                            <li>
                                                                Upgrade more
                                                                outputs
                                                            </li>
                                                        </ul>
                                                        <div className="pt-classic-footer">
                                                            <a
                                                                className="button button-default-outline button-icon button-icon-right button-winona font-weight-regular"
                                                                href="https://mibaio.in/#"
                                                            >
                                                                <div className="content-original">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                                <div className="content-dubbed">
                                                                    <span className="icon mdi mdi-arrow-right" />
                                                                    Select Plan
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div> */}

										<div className="owl-nav disabled">
											<div className="owl-prev disabled" />
											<div className="owl-next disabled" />
										</div>
										<div className="owl-dots disabled" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<section
						id="FAQ"
						className="section section-md bg-gray-100 text-center wow fadeInUp"
						data-wow-delay=".3s"
					>
						<div className=" container">
							<span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
								Popular Questions
							</span>
							<h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">
								Frequently Asked Questions
							</h3>
							{/* <div
								className="row row-30 justify-content-center justify-content-lg-start wow fadeIn"
								id="app-accordion"
								data-wow-delay=".2s"
							> */}
							{/* --------------------------- */}
							<div
								className="accordion row row-30 justify-content-center justify-content-lg-start"
								id="appAccordion"
								data-wow-delay=".2s"
							>
								<div className="col-md-10 col-lg-6 wow fadeInLeftSmall">
									<div className="card-group-custom card-group-classic card-group-classic_1">
										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingOne">
													<a
														className="accordion-button"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="true"
														aria-controls="collapseOne"
													>
														What does "MIBAiO" mean?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseOne"
													className="accordion-collapse collapse card-body show"
													aria-labelledby="headingOne"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														MIBAiO is an acronym for Manual Internet Bluetooth All
														In One.{" "}
													</div>
												</div>
											</div>
										</div>
										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingTwo">
													<a
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
													>
														What are the key features of your product?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseTwo"
													className="accordion-collapse collapse card-body"
													aria-labelledby="headingTwo"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														Our product offers Manual, Internet and Bluetooth
														all-in-one functionality along with voice control. To
														know more about key features, please refer the product
														brochure.
													</div>
												</div>
											</div>
										</div>
										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingThree">
													<a
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseThree"
														aria-expanded="false"
														aria-controls="collapseThree"
													>
														Why should I purchase your product?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseThree"
													className="accordion-collapse collapse card-body"
													aria-labelledby="headingThree"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														The major advantage is price: You get a premium model
														under ₹4000. You don't have to call an electrician for
														installation, we make it very easy to install for you.
														Second advantage is Made in INDIA: Our product is
														carefully designed for a standard Indian household of
														world-class quality. We are working under the Make in
														India, Digital India, Aatmanirbhar Bharat initiatives.{" "}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-10 col-lg-6 wow fadeInRightSmall">
									<div className="card-group-custom card-group-classic card-group-classic_1">
										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingFour">
													<a
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseFour"
														aria-expanded="false"
														aria-controls="collapseFour"
													>
														Do you provide post sales service?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseFour"
													className="accordion-collapse collapse card-body"
													aria-labelledby="headingFour"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														Yes, we do. Our team is ready for your support
														24x7x365 with our qualified Engineers.
													</div>
												</div>
											</div>
										</div>

										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingFive">
													<a
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseFive"
														aria-expanded="false"
														aria-controls="collapseFive"
													>
														Does your product control the speed of fan digitally?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseFive"
													className="accordion-collapse collapse card-body"
													aria-labelledby="headingFive"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														No as of now. But you'll get that funtion in the
														upcoming versions of MIBAiO.
													</div>
												</div>
											</div>
										</div>
										<div className="card card-custom card-classic">
											<div className="accordion-item card-header">
												<h2 className="accordion-header card-title" id="headingSix">
													<a
														className="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseSix"
														aria-expanded="false"
														aria-controls="collapseSix"
													>
														What can I do with your product?
														<span className="card-arrow"></span>
													</a>
												</h2>
												<div
													id="collapseSix"
													className="accordion-collapse collapse card-body"
													aria-labelledby="headingSix"
													data-bs-parent="#appAccordion"
												>
													<div className="accordion-body">
														Talk to your electrical appliances through Siri, Alexa
														and Google voice assistant. Control your exising
														appliances with your smartphone and also manually(like
														we do now using the conventional switches). Monitor your
														electricity consumption of connected appliances on your
														smartphone app.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-10 col-lg-6">
									<div
										className="card-group-custom card-group-classic card-group-classic_1"
										role="tablist"
										aria-multiselectable="false"
									>
										<article className="card card-custom card-classic">
											<div
												className="card-header"
												id="app-accordion-heading-4"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-4"
														aria-controls="app-accordion-collapse-4"
														aria-expanded="true"
													>
														What does "MIBAiO" mean?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse show"
												id="app-accordion-collapse-4"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-4"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														MIBAiO is an acronym for
														Manual Internet
														Bluetooth All In One.{" "}
													</p>
												</div>
											</div>
										</article>

										<article className="card card-custom card-classic">
											<div
												className="card-header"
												id="app-accordion-heading-1"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link collapsed"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-1"
														aria-controls="app-accordion-collapse-1"
														aria-expanded="false"
													>
														What are the key
														features of your
														product?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse"
												id="app-accordion-collapse-1"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-1"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														Our product offers
														Manual, Internet and
														Bluetooth all-in-one
														functionality along with
														voice control. To know
														more about key features,
														please refer the product
														brochure.
													</p>
												</div>
											</div>
										</article>

										<article className="card card-custom card-classic">
											<div
												className="card-header"
												id="app-accordion-heading-2"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link collapsed"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-2"
														aria-controls="app-accordion-collapse-2"
														aria-expanded="false"
													>
														Why should I purchase
														your product?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse"
												id="app-accordion-collapse-2"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-2"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														The major advantage is
														price: You get a premium
														model under ₹4000. You
														don't have to call an
														electrician for
														installation, we make it
														very easy to install for
														you. Second advantage is
														Made in INDIA: Our
														product is carefully
														designed for a standard
														Indian household of
														world-class quality. We
														are working under the
														Make in India, Digital
														India, Aatmanirbhar
														Bharat initiatives.{" "}
													</p>
												</div>
											</div>
										</article>
									</div>
								</div>
								<div className="col-md-10 col-lg-6">
									<div
										className="card-group-custom card-group-classic card-group-classic_1"
										role="tablist"
										aria-multiselectable="false"
									>
										<article className="card card-custom card-classic wow clipInLeft">
											<div
												className="card-header"
												id="app-accordion-heading-3"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link collapsed"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-3"
														aria-controls="app-accordion-collapse-3"
														aria-expanded="false"
													>
														Do you provide post
														sales service?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse"
												id="app-accordion-collapse-3"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-3"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														Yes, we do. Our team is
														ready for your support
														24x7x365 with our
														qualified Engineers.
													</p>
												</div>
											</div>
										</article>

										<article className="card card-custom card-classic">
											<div
												className="card-header"
												id="app-accordion-heading-6"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link collapsed"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-6"
														aria-controls="app-accordion-collapse-6"
														aria-expanded="false"
													>
														Does your product
														control the speed of fan
														digitally?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse"
												id="app-accordion-collapse-6"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-6"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														No as of now. But you'll
														get that funtion in the
														upcoming versions of
														MIBAiO.
													</p>
												</div>
											</div>
										</article>
										<article className="card card-custom card-classic">
											<div
												className="card-header"
												id="app-accordion-heading-5"
												role="tab"
											>
												<div className="card-title">
													<a
														className="card-link collapsed"
														role="button"
														data-toggle="collapse"
														href="#app-accordion-collapse-5"
														aria-controls="app-accordion-collapse-5"
														aria-expanded="false"
													>
														What can I do with your
														product?
														<div className="card-arrow"></div>
													</a>
												</div>
											</div>
											<div
												className="collapse"
												id="app-accordion-collapse-5"
												role="tabpanel"
												aria-labelledby="app-accordion-heading-5"
												data-parent="#app-accordion"
											>
												<div className="card-body">
													<p>
														Talk to your electrical
														appliances through Siri,
														Alexa and Google voice
														assistant. Control your
														exising appliances with
														your smartphone and also
														manually(like we do now
														using the conventional
														switches). Monitor your
														electricity consumption
														of connected appliances
														on your smartphone app.
													</p>
												</div>
											</div>
										</article>
									</div>
								</div> */}
							{/* </div> */}
						</div>
					</section>

					<section className="section section-md text-center">
						<div className="container">
							<span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">
								lifestyle 2.0
							</span>
							<h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">
								Step into the future,{" "}
								<span style={{ color: "#0accbe" }}>Upgrade to MIBAiO</span>
							</h3>
							<p className="wow fadeIn" data-wow-delay=".2s">
								<span
									style={{
										maxWidth: "720px",
										opacity: " .85",
									}}
								>
									It’s time to upgrade your home/office/workspace and experience
									the futuristic lifestyle! Contact us directly to enhance your
									lifestyle experience.
								</span>
							</p>
						</div>
						<div className="group" style={{ padding: "15px" }}>
							<Link
								className="button button-default-outline button-winona text-black wow fadeIn"
								to="/contact_us"
								data-wow-delay=".1s"
							>
								<span></span>Contact us
							</Link>
							<Link
								className="button button-secondary button-winona wow fadeIn"
								to="/view"
								data-wow-delay=".1s"
								style={{ marginLeft: "13px" }}
							>
								<span></span>Buy Now
							</Link>
						</div>
					</section>

					<CustomFooter />
				</div>
				<div className="snackbars" id="form-output-global" />
			</div>
			{/* </div> */}
		</>
	);
};

export default Home;
