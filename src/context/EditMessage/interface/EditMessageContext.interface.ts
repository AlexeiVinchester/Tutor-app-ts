export interface IEditMessageContext {
  isEditMessageOpen: string;
  openEditMessage: (message: string) => void;
  closeEditMessage: () => void;
}
