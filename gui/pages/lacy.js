let lacy = {};

// Lacy Gaton's pt profile
lacy.prod = "";
lacy.stg = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";
lacy.stg_medsync = "https://stg-rebranding.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=E43187B51EB649E3A6005961D55299BD&timer=true";
lacy.stg_ecare = "https://stg-rebranding.prescribewellness.com/Patient/PrescribeCare?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true";
lacy.local = "https://localhost:44340/Patient/PrescribeCare?patientId=E43187B51EB649E3A6005961D55299BD&timer=true";
lacy.dev = "https://dev-rebranding.prescribewellness.com/Patient/PrescribeCare?patientId=E43187B51EB649E3A6005961D55299BD&timer=true";
lacy.title = "Patient - Profile - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.p_title = "Patient - Programs - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.meds_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.m_title = "Patient - Medicare - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.v_title = "Vaccinations - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.ec_title = "eCare Plans - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.cc_title = "Care Campaigns - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.c_title = "Patient - Profile - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";
lacy.l_title = "Patient - Timer Log - Pharmacy Portal - Account: 86362 - NPI: 1234934850 - NCPDP: 8888888 - MedWatchers_Test";

// Lacy Gastons pt profile in Sample  Account: 86362 - NPI: 1234934850 - NCPDP: 8888888
lacy.local_chain = "https://localhost:44340/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";
lacy.dev_chain = "https://dev-rebranding.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";
lacy.stg_chain = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";
lacy.prod_chain_link = "https://web.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";
lacy.beta_chain_link = "https://beta-web.prescribewellness.com/Patient/Details?patientId=E43187B51EB649E3A6005961D55299BD";

// In All pt profiles
lacy.o = "Overview";
lacy.p = "Programs";
lacy.meds = "Medications";
lacy.prm = "Patient-Reported Medication";
lacy.ma = "Medication Allergies";
lacy.mh = "Medication History";
lacy.m = "Medicare";
lacy.v = "Vaccines";
lacy.ec = "eCare";
lacy.ec_ca_path = "//a[@href = '/Patient/PrescribeCare?patientId=E43187B51EB649E3A6005961D55299BD&timer=true']";
lacy.ec_bb_path = "//a[@href = '/Patient/PrescribeCare?patientId=E43187B51EB649E3A6005961D55299BD&timer=true']";
lacy.cc = "Care Campaigns";
lacy.c = "Communications";
lacy.fh = "Fax History";
lacy.l = "Log";

module.exports = lacy;