export enum Aggregate {
	DEFAULT,
	CURRENT,
	AVG,
	MIN,
	MAX,
	STDEV,
	STDEVP,
	VAR,
	VARP,
}

export enum Comparator {
	EQUAL,
	NOTEQUAL,
	LESSER,
	LESSEREQUAL,
	GREATER,
	GREATEREQUAL,
}

export enum Severity {
	Low = 1,
	Medium = 5,
	High = 9,
}

export enum Action {
	Annotate,
	Ticket,
	Email,
}

export interface Family {
	id: number;
	name?: string;
}

export interface Machine {
	id: number;
	name?: string;
	family?: Family;
	owner?: string;
}

export interface Metric {
	id: number;
	name?: string;
	machine?: Machine;
}

export interface Seggregate {
	id: number;
	metric: Metric;
	filters: string[];
}

export interface Element {
	id: number;
	metric: Metric;
	isFamily: boolean;
	aggregate: Aggregate;
	aggregateOffset: string;
	seggregates: Seggregate[];
	multiplier?: number;
	updateInterval?: string;
	SQL?: string;
}

export interface Condition {
	id: number;
	left: Element;
	comparator: Comparator;
	right: Element;
}

export interface Rule {
	id: number;
	name: string;
	machine: Machine;
	metric?: Metric;
	family: Family;
	conditions: Condition[]; //modifiable
	predicate: string; //modifiable
	owner: string;
	isDisabled: boolean; //modifiable
	createdOn?: Date;
	createdBy?: string;
	previousVersion?: Rule;
	hasNewer?: boolean;
	severity: Severity;
	action: Action;
}

export interface Abnormality {
	id: number;
	rule: any;
	start: Date;
	end: Date;
	hasResponded: boolean;
}

export interface Annotation {
	id: number;
	startTimestamp: Date;
	endTimestamp: Date;
	content: string;
	employee: string;
	machine: Machine;
	metric: Metric;
	abnormality: Abnormality;
}

export interface DataPoint {
	timestamp: Date;
	value: number;
}

export enum TicketLogType {
	Action = 1,
	Comment = 2,
}

export enum Status {
	Active = "Active",
	Pending = 5,
	Closed = 9,
}

export interface TicketLog {
	id: number;
	timestamp: Date;
	employee: any;
	content: string;
	type: TicketLogType;
	replies: TicketLog[];
}

export interface Ticket {
	id: number;
	ticketNumber: string;
	start: Date;
	end: any;
	abnormalities: Abnormality[];
	employee: string;
	status: Status;
	logs: TicketLog[];
	remarks: any;
}
