let pt_profile = {};

// Carl Allen's pt profile in PW Community (Account 129634)
pt_profile.prod = "";
pt_profile.stg = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88&pharmacyId=129634";
pt_profile.stg_medsync = "https://stg-rebranding.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=129634.AB6002230683436188168042F8DF9D88";
pt_profile.dev = "https://dev-rebranding.prescribewellness.com/Patient/Details?patientId=AB6002230683436188168042F8DF9D88";
pt_profile.title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.p_title = "Patient - Programs - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.meds_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.mw_title = "Patient - MedWise - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.m_title = "Patient - Medicare - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.v_title = "Vaccinations - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.ec_title = "eCare Plans - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.cc_title = "Care Campaigns - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.c_title = "Patient - Profile - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";
pt_profile.l_title = "Patient - Timer Log - Pharmacy Portal - Account: 129634 - NPI: 9876543210 - NCPDP: 1296341 - HthreeNtwo";

// Brent Bagwell's pt profile in Sample Chain Store 1 (Account 2043550027)
pt_profile.dev_chain = "https://dev-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
pt_profile.stg_chain = "https://webstg.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
pt_profile.prod_chain_link = "https://web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
pt_profile.beta_chain_link = "https://beta-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";

// In All pt profiles
pt_profile.o = "Overview";
pt_profile.p = "Programs";
pt_profile.meds = "Medications";
pt_profile.prm = "Patient-Reported Medication";
pt_profile.ma = "Medication Allergies";
pt_profile.mh = "Medication History";
pt_profile.mtr = "Med Time Reminders";
pt_profile.mw = "MedWise™";
pt_profile.m = "Medicare";
pt_profile.v = "Vaccines";
pt_profile.ec = "eCare";
pt_profile.ec_ca_path = "//a[@href = '/Patient/PrescribeCare?patientId=AB6002230683436188168042F8DF9D88&timer=true']";
pt_profile.ec_bb_path = "//a[@href = '/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true']";
pt_profile.cc = "Care Campaigns";
pt_profile.c = "Communications";
pt_profile.fh = "Fax History";
pt_profile.l = "Log";

module.exports = pt_profile;