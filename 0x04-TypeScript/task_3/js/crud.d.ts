/// <reference path="interface.ts" />

declare module "crud" {
  export function insertRow(row: RowElement): number;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
