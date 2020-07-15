import * as React from "react";
import ReactDOM from 'react-dom';
import { Ticket, Status, TicketLogType, Severity } from "./Def";
import Post from "./data.json";
import { PrimaryButton, Icon, Persona, PersonaSize } from "@fluentui/react";
import { Card, ICardTokens, ICardSectionStyles } from "@uifabric/react-cards";
import ShowChart from '@material-ui/icons/ShowChart';
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths";
import _ from "lodash";
import { TicketsData } from "./Data";
import './App.css';
import {
	TextField,
	ITextFieldStyles,
} from "office-ui-fabric-react/lib/TextField";
import {
	DetailsList,
	DetailsListLayoutMode,
	SelectionMode,
} from "office-ui-fabric-react/lib/DetailsList";


interface IProps {
	id?: string;
}
const loadData = () => JSON.parse(JSON.stringify(Post));

interface IState {
	ticket: Ticket;
	textboxOne: string;
	textboxTwo: string;
}

const textFieldStyles: Partial<ITextFieldStyles> = {
	fieldGroup: { minWidth: 900 },
};


class App extends React.Component {
	public constructor(props: any, state: any) {
		super(props, state);
		this.state = {
			ticket: TicketsData[0],
			textboxOne: "",
			textboxTwo: "",
		};
	}
	public render() {
		const _item = [
			{ end: '1593435275335', start: '2020-06-26T12:54:35.335Z', btn: <ShowChart style={{ cursor: "pointer" }} /> },
			{ end: '1593435275335', start: '2020-06-28T12:54:35.335Z', btn: <ShowChart style={{ cursor: "pointer" }} /> },
		];
		const _columns = [
			{
				key: "column1",
				name: "Start",
				fieldName: "start",
				minWidth: 100,
				maxWidth: 200,
				isResizable: true,
			},
			{
				key: "column2",
				name: "End",
				fieldName: "end",
				minWidth: 100,
				maxWidth: 200,
				isResizable: true,
			},
			{
				key: "column3",
				name: "",
				fieldName: "btn",
				minWidth: 100,
				maxWidth: 200,
				isResizable: true,
			},
		];
		const firstCardSectionStyles: ICardSectionStyles = {
			root: {
				backgroundColor: "white",
				borderColor: "red",
				width: "100%",
			},
		};

		const cardTokens: ICardTokens = {
			maxWidth: "100%",
			minWidth: "100%",
			width: "100%",
			padding: "10px",
		};


		return (
			<div className="container">
				<div className="title">
					{Post.map((loadData) => {
						return <>{loadData.num}</>
					})}
					<PrimaryButton>Complete</PrimaryButton>
				</div>
				<div className="subHeader">
					<div className={"pill" + " " + "pillStyle"}>
						<div
							style={{
								backgroundColor: "rgb(0, 120, 212)",
								borderRadius: "50px",
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div className="pillText">
								{Status["Active"]}
							</div>
						</div>
					</div>
						assingned to
						<div className="topName">
						<Persona
							imageInitials="MD"
							size={PersonaSize.size24}
						/>
						<div
							style={{
								marginLeft: "-10px",
							}}
						>
							{Post.map((loadData) => {
								return <>{loadData.comp}</>
							})}
						</div>
					</div>
						with severity
						<div
						className="pill"
						style={{ marginLeft: "6px" }}
					>
						<div
							style={{
								backgroundColor: "rgb(85, 163, 98)",
								borderRadius: "50px",
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div className="pillText">Low</div>
						</div>
					</div>
				</div>

				<div>
					<Card
						aria-label="Basic horizontal card"
						horizontal
						tokens={cardTokens}
						style={{
							backgroundColor: "white",
							marginTop: "20px",
							marginBottom: "20px",
						}}
					>
						<Card.Item styles={firstCardSectionStyles}>
							<div
								style={{
									padding: "10px",
								}}
								className="para"
							>
								<p>
									Name:{""}
									<span>
										{" "}
										{Post.map((loadData) => {
											return <>{loadData.name}</>
										})}
										{" "}
									</span>
								</p>
								<p>
									Machine Name:
									<span>
										{Post.map((loadData) => {
											return <>{loadData.machine_name}</>
										})}{" "}
									</span>
								</p>
								<p>
									Family Name:
									<span>
										{Post.map((loadData) => {
											return <>{loadData.family_name}</>
										})}{" "}
									</span>
								</p>
								<p>
									Created On:{" "}
									<span>
										{" "}
										{Post.map((loadData) => {
											return <>{loadData.time}</>
										})}
									</span>
								</p>
								<p>
									Created By:{" "}
									<span>
										{" "}
										{Post.map((loadData) => {
											return <>{loadData.by}</>
										})}
										{" "}
									</span>
								</p>
								<div>
									<DetailsList
										items={_item}
										columns={_columns}
										setKey="none"
										layoutMode={
											DetailsListLayoutMode.justified
										}
										isHeaderVisible={true}
										selectionMode={SelectionMode.none}
									/>
								</div>

							</div>
						</Card.Item>
					</Card>
				</div>
				<div className="content">
					<div className="logsContainer">
						<div className="logIcon">
							<div
								className="iconLine"
								style={{
									flexGrow: 1,
									borderLeft: "transparent",
								}}
							/>
							<Icon
								className="location"
								iconName={"messageFill"}
							></Icon>
							<div
								className="iconLine"
								style={{
									flexGrow: 1,
									borderLeft: 2,

								}}
							/>
						</div>
						<div className="cellContainer">
							<div className="cellContent">
								<div
									style={{
										backgroundColor: "white",
										boxShadow: Depths.depth8,
									}}
								>
									<div className="commentContainer">
										<div
											style={{
												display: "flex",
											}}
										>
											<div className="persona">
												<Persona
													imageInitials="MD"
													size={PersonaSize.size24}
												/>
											</div>
											<div
												style={{
													paddingLeft: "8px",
													flexGrow: 1,
													display: "flex",
													flexDirection: "column",
													overflow: "hidden",
												}}
											>
												<div
													className="commentHeader"

												>
													<div>
														<div
															style={{
																display: "flex",
																flexDirection:
																	"column",
															}}
														>
															<TextField
																styles={
																	textFieldStyles
																}

															/>
															<div
																style={{
																	display:
																		"flex",
																	marginTop:
																		"15px",
																}}
															>
																<PrimaryButton
																	text="Comment"
																	allowDisabledFocus

																	style={{
																		marginLeft:
																			"auto",
																		width:
																			"30px",
																	}}
																/>
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



					</div>
					<div className="logsContainer">
						<div className="logIcon">
							<div
								className="iconLine"
								style={{
									flexGrow: 1,
								}}
							/>
							<Icon
								className="location"
								iconName={
									"messageFill"
								}
							></Icon>
							<div
								className="iconLine"
								style={{
									flexGrow: 1,
								}}
							/>

						</div>

						<div className="cellContainer">
							<div className="cellContent">
								<div
									style={{
										backgroundColor: "white",
										boxShadow: Depths.depth8,
									}}
								>
									<div className="commentContainer">
										<div
											style={{
												display: "flex",
											}}
										>
											<div className="persona">
												<Persona
													imageInitials="MD"
													size={PersonaSize.size24}
												/>
											</div>
											<div
												style={{
													paddingLeft: "8px",
													flexGrow: 1,
													display: "flex",
													flexDirection: "column",
													overflow: "hidden",
												}}
											>
												<div
													className="commentHeader"

												>
													<div>
														<div
															style={{
																paddingRight:
																	"8px",
																fontSize:
																	"14px",
																color:
																	"rgba(0,0,0,0.9)",
																fontWeight: 600,
																width:
																	"100%",
															}}
														>
															{Post.map((loadData) => {
																return <>{loadData.employee}</>
															})}
														</div>
														<div
															style={{
																fontSize:
																	"12px",
																color:
																	"rgba(0,0,0,0.55)",
																marginTop:
																	"5px",
																marginBottom:
																	"5px",
															}}
														>
															{Post.map((loadData) => {
																return <p>{loadData.age}</p>
															})}
														</div>
														<div
															style={{
																paddingRight:
																	"8px",
																fontSize:
																	"14px",
															}}
														>
														</div>
														{Post.map((loadData) => {
															return <p>{loadData.contentt}</p>
														})}
														<hr
															style={{
																color:
																	"rgba(0,0,0,0.55)",
																marginTop:
																	"10px",
																marginBottom:
																	"10px",
															}}
														/>
														<div
															style={{
																display:
																	"flex",
															}}
														>


															<TextField
																styles={
																	textFieldStyles
																}
																placeholder="write a reply..."

															/>
															<div
																style={{
																	display:
																		"flex",
																	marginTop:
																		"15px",
																}}
															>
																<PrimaryButton
																	text="Reply"
																	allowDisabledFocus

																	style={{
																		marginLeft:
																			"30px",
																		width:
																			"30px",
																		marginTop: "-13px"

																	}}
																/>
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
					</div>

					<div className="cellContainer">
						<div className="cellContent">
							<div
								style={{
									backgroundColor:
										"white",
									boxShadow:
										Depths.depth8,
								}}
							>
								<div
									className="commentContainer"
								>
									<div
										className="persona"
									>
										<Persona
											imageInitials="MD"
											size={
												PersonaSize.size24
											}
										/>
									</div>
									<div
										style={{
											paddingLeft:
												"8px",
											flexGrow: 1,
											display: "flex",
											flexDirection:
												"column",
											overflow:
												"hidden",
										}}
									>
										<div
											className="commentHeaderTwo"
										>
											<div>
												<div
													style={{
														paddingRight:
															"8px",
														fontSize:
															"14px",
														fontWeight:
															"bold",
													}}
												>
													{Post.map((loadData) => {
														return <p>{loadData.emp}</p>
													})}
												</div>
												<div
													style={{
														fontSize:
															"12px",
														color:
															"rgba(0,0,0,0.55)",
														marginTop:
															"5px",
														marginBottom:
															"5px",
													}}
												>
													{Post.map((loadData) => {
														return <p>{loadData.age2}</p>
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="cellContainer">
						<div className="cellContent">
							<div
								style={{
									backgroundColor:
										"white",
									boxShadow:
										Depths.depth8,
								}}
							>
								<div
									className="commentContainer"
								>
									<div
										className="persona"
									>
										<Persona
											imageInitials="MD"
											size={
												PersonaSize.size24
											}
										/>
									</div>
									<div
										style={{
											paddingLeft:
												"8px",
											flexGrow: 1,
											display: "flex",
											flexDirection:
												"column",
											overflow:
												"hidden",
										}}
									>
										<div
											className="commentHeaderTwo"
										>
											<div>
												<div
													style={{
														paddingRight:
															"8px",
														fontSize:
															"14px",
														fontWeight:
															"bold",
													}}
												>
													{Post.map((loadData) => {
														return <p>{loadData.emp}</p>
													})}
												</div>
												<div
													style={{
														fontSize:
															"12px",
														color:
															"rgba(0,0,0,0.55)",
														marginTop:
															"5px",
														marginBottom:
															"5px",
													}}
												>
													{Post.map((loadData) => {
														return <p>{loadData.age2}</p>
													})}
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
	}

}


export default App;
