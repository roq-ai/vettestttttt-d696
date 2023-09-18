interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Clinic Owner'],
  customerRoles: [],
  tenantRoles: ['Clinic Owner', 'Veterinarian', 'Veterinary Nurse'],
  tenantName: 'Clinic',
  applicationName: 'vettestttttt',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    "Manage doctors' profiles",
    "Manage nurses' profiles",
    'Invite Veterinarians and Veterinary Nurses to the system',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a84e642c-dceb-479c-bda4-c75a902334cd',
};
