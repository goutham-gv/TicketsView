import {
	Ticket,
	Status,
	TicketLogType,
	Severity,
	Action,
} from "./Def";
import moment from "moment";

export const TicketsData: Ticket[] = [
	{
		id: 1,
		ticketNumber: "#TICK1",
		start: moment(Date.now()).subtract(2, "days").toDate(),
		end: null,
		abnormalities: [
			{
				id: 1,
				rule: {
					id: 0,
					name: "XTemperature against family average",
					machine: {
						id: 1,
						name: "CMMH001",
					},
					family: {
						id: 0,
						name: "cmhu55",
					},
					metric: {
						id: 0,
						name: "XTemp",
					},
					conditions: [],
					predicate: "",
					owner: "Z123456",
					isDisabled: false,
					createdOn: moment(Date.now()).subtract(60, "days").toDate(),
					severity: Severity.Low,
					action: Action.Ticket,
				},
				start: moment(Date.now()).subtract(18.1, "days").toDate(),
				end: moment(Date.now()).subtract(15, "days").toDate(),
				hasResponded: true,
			},
			{
				id: 2,
				rule: null,
				start: moment(Date.now()).subtract(16.01, "days").toDate(),
				end: moment(Date.now()).subtract(16, "days").toDate(),
				hasResponded: false,
			},
		],
		employee: "MACHDATUM",
		status: Status.Active,
		logs: [
			{
				id: 1,
				timestamp: moment(Date.now()).subtract(16, "days").toDate(),
				employee: null,
				content: "Ticket created due to abnormality",
				type: TicketLogType.Action,
				replies: [],
			},
			{
				id: 2,
				timestamp: moment(Date.now()).subtract(16, "days").toDate(),
				employee: "employee2",
				content: "Ticket assigned to Z123456",
				type: TicketLogType.Action,
				replies: [],
			},
			{
				id: 3,
				timestamp: moment(Date.now()).subtract(1, "days").toDate(),
				employee: "Z123456",
				content: "What caused the anomaly",
				type: TicketLogType.Comment,
				replies: [],
			},
		],
		remarks: null,
	},
];
