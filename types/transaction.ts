import { DeliverTxResponse } from "@cosmjs/stargate"

export interface SignerMessage<T> {
	typeUrl: string
	value: T
}

export enum TransactionStatus {
	BROADCASTING = "broadcasting",
	PENDING = "pending",
	SUCCESS = "success",
	FAILED = "failed",
}

export enum TransactionType {
	FANTOKEN_ISSUE = "fantokenIssue",
}

export interface Transaction {
	id: string
	tx?: DeliverTxResponse
	time: number
	status: TransactionStatus
	type: TransactionType
}
