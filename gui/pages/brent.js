let brent = {};

// Brent Bagwells's pt profile
brent.prod = "";
brent.stg = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";
brent.stg_medsync = "https://stg-rebranding.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";
brent.dev = "https://dev-rebranding.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88";
brent.title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.p_title = "Patient - Programs - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.meds_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.mw_title = "Patient - MedWise - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.m_title = "Patient - Medicare - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.v_title = "Vaccinations - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.ec_title = "eCare Plans - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.cc_title = "Care Campaigns - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.c_title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
brent.l_title = "Patient - Timer Log - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";

// Brent Bagwell's pt profile in Sample Chain Store 1 (Account 2043550027)
brent.dev_chain = "https://dev-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.stg_chain = "https://webstg.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.prod_chain_link = "https://web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.beta_chain_link = "https://beta-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";

// In All pt profiles
brent.o = "Overview";
brent.p = "Programs";
brent.meds = "Medications";
brent.prm = "Patient-Reported Medication";
brent.ma = "Medication Allergies";
brent.mh = "Medication History";
brent.mtr = "Med Time Reminders";
brent.mw = "MedWise™";
brent.m = "Medicare";
brent.v = "Vaccines";
brent.ec = "eCare";
brent.ec_ca_path = "//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']";
brent.ec_bb_path = "//a[@href = '/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true']";
brent.cc = "Care Campaigns";
brent.c = "Communications";
brent.fh = "Fax History";
brent.l = "Log";

module.exports = brent;