import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./quantumquill.png"
								alt="quantumquill"
								className="work-image"
							/>
							<div className="work-title">Full-Stack Developer</div>
							<div className="work-subtitle">QuantumQuill · Part-time</div>
							<div className="work-duration">Feb 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" 
								alt="linkedin"
								className="work-image"
							/>
							<div className="work-title">Full Stack Developer</div>
							<div className="work-subtitle">Freelance</div>
							<div className="work-duration">Nov 2023 - Present</div>
						</div>


						<div className="work">
							<img
								src="./ivy.jpeg" 
								alt="ivy"
								className="work-image"
							/>
							<div className="work-title">Machine Learning Engineer</div>
							<div className="work-subtitle">Ivy · Contract</div>
							<div className="work-duration">Nov 2023 - January 2023 · 3 mos</div>
						</div>

						<div className="work">
							<img
								src="./radicalx.jpg"
								alt="radicalx"
								className="work-image"
							/>
							<div className="work-title">AI Engineer</div>
							<div className="work-subtitle">RadicalX · Internship</div>
							<div className="work-duration">Oct 2023 - Feb 2024 · 5 mos</div>
						</div>

						<div className="work">
							<img
								src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" 
								alt="linkedin"
								className="work-image"
							/>
							<div className="work-title">Field Assistant Technician</div>
							<div className="work-subtitle">Parasat Cable TV · On Job Training</div>
							<div className="work-duration">Nov 2022 - Jan 2023 · 3 mos</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
