let brent = {};

// Brent Bagwells's pt profile
brent.prod = "";
brent.stg = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.stg_medsync = "https://stg-rebranding.prescribewellness.com/MedSync/MedicationSynchronizationEnroll?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A&timer=true";
brent.dev = "https://dev-rebranding.prescribewellness.com/Patient/Details?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.title = "Patient - Profile - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.p_title = "Patient - Programs - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.meds_title = "Med Sync: Synchronization - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.m_title = "Patient - Medicare - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.v_title = "Vaccinations - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.ec_title = "eCare Plans - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.cc_title = "Care Campaigns - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.c_title = "Patient - Profile - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";
brent.l_title = "Patient - Timer Log - Pharmacy Portal - Account: 2043550027 - NPI: 9000000001 - NCPDP: 9000001 - chainPartner";

// Brent Bagwell's pt profile in Sample Chain Store 1 (Account 2043550027)
brent.dev_chain = "https://dev-rebranding.prescribewellness.com/Patient/Details?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.stg_chain = "https://stg-rebranding.prescribewellness.com/Patient/Details?patientId=01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.prod_chain_link = "https://web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";
brent.beta_chain_link = "https://beta-web.prescribewellness.com/Patient/Details?patientId=204355.01DDDB4C6ECD41D3A3DFCA37E613147A";

// In All pt profiles
brent.o = "Overview";
brent.p = "Programs";
brent.meds = "Medications";
brent.prm = "Patient-Reported Medication";
brent.ma = "Medication Allergies";
brent.mh = "Medication History";
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