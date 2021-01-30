const charities = [
  {
    name: 'Aurora',
    summary: 'We care and improve the quality of life for children and adults with profound mental and physical disabilities. Aurora’s doors are always open to anyone who would like to visit our centre and to spend time volunteering. We have a staff compliment of close to 100 employees. The Aurora Special Care Centre is a registered Non-Profit Organisation and we value the support of our wonderful friends, donors, volunteers and the community.',
    contact: `https://www.aurorasa.co.za/volunteers.html`,
    donte : 'https://www.aurorasa.co.za/donations.html',
    location: `Eastern Cape`,
    cause: 'Health Charities'
  },
  {
    name: 'Boland Hospice',
    summary: 'Our mission: In partnership we will provide quality holistic health care for communities in the Cape Winelands District together with public, private and NPO partners to ensure dignity and quality of life. Boland Hospice is about you and your health.  It was founded on the need for traditional care for those with end of life care needs. Boland Hospice has evolved since it cared for its first patient in 2006.',
    contact: 'https://www.bolandhospice.org/contact-us',
    donate : 'https://b39b7e6c-603b-4b24-b807-97d59a613fc2.filesusr.com/ugd/7a3723_8b58a60dcee54513aa4e55bc579d1986.pdf',
    location: `Western Cape`,
    cause: 'Health Charities'
  },
  {
    name: 'Change the World Trust',
    summary: 'Change the World Trust is a Non-Profit passionate about long-term solutions and ripple-effect project results. Its primary focus is IT Training and educational projects benefiting youth and children. Launched in early 2009 as a hands-on IT Training project, it has grown and is seen as the early-mover and leading innovator in ICT Training ventures for youth in South Africa.',
    contact: 'http://www.changetheworld.org.za/contactus',
    donate : 'http://www.changetheworld.org.za/how-to-help/supportthecause',
    location: `Gauteng`,
    cause: 'Arts, Culture and Humanities Charities'
  },
  {
    name: 'Diabetes South Africa',
    summary: 'Empowering all those affected by Diabetes through support, education and information. Providing awareness to all and highlighting risk factors associated with diabetes and promoting healthy lifestyles. Diabetes SA is primarily a volunteer organisation and relies heavily on people with diabetes and their families who pool their talents, share their knowledge and experiences and give of their time to help each other.',
    contact: 'https://www.diabetessa.org.za/',
    donate : "https://www.payfast.co.za/donate/go/diabetessawc",
    location: `Western Cape`,
    cause: 'Health Charities'
  },
  {
    name: 'Epilepsy South Africa National Office',
    summary: 'Epilepsy South Africa is the only national non-profit organisation in the country focussing exclusively on rendering specialised and comprehensive services to people living with epilepsy and other disabilities, including education and economic empowerment through job creation and entrepreneurship- and skills training suited to almost any level of development. We are dedicated to enhancing the quality of life of people living with and affected by epilepsy as well as other disabilities.',
    contact: 'https://epilepsy.org.za/new/contact-us/',
    donate : 'https://50millionsteps.org/fundraising-sponsorship/',
    location: 'Western Cape',
    cause: 'Health Charities'
  },
  {
    name: 'Kids Haven',
    summary: 'With an aim of reaching out to care, provide shelter for boys 12+, protection, education, training and therapy to kids to kids in need. Kids Haven is dedicated to the protection of all vulnerable children, including those with street connections, to support meaningful inclusion in society. With the three pillars of pre-care, in-care and after-care they help provide ongoing support to the commuinties and strengthen families.',               
    contact: 'https://kidshaven.co.za/volunteer/',
    donate : 'https://kidshaven.co.za/donate/',
    location: `Gauteng`,
    cause: 'Shelter and Homeless Services'
  },
  {
    name: 'BEFSA',
    summary: 'Launched in 2004 The Borien Educational Foundation for Southern Africa (BEFSA) with the aim of reducing poverty with reasoures focused on assisting the marginalised communities of the Eastern Cape in South Africa. The a mission focused on improvement of the quality of education and economic development allowing township schools to become agents for change. Their work range from providing resources to schools, providing training to educatetors and helping women start micro businesses.  ',
    contact: 'https://befsa.org/get-involved/',
    donate : 'https://uk.virginmoneygiving.com/donation-web/charity?charityId=1001403&stop_mobi=yes',
    location: `Eastern Cape`,
    cause: 'Education Charities'
  },
  {
    name: 'Hope in South Africa',
    summary: 'Started in 2004 Hope in South Africa (HISA) is a global partnership that empowers communities to enable every citizen to become healthy, responsible, contributing members of society.It all began with an inspiration to renovate the local community center resulting in a thriving facility that now houses a soup kitchen, garden, bakery, library as well as provides HIV and Fetal Alcohol Spectrum Disorder (FASD) health education and leadership training for youth.', 
    contact: 'https://www.hopeinsouthafrica.org/contact',
    donate : 'https://donorbox.org/holiday-christmas-blessings-campaign-2020',
    location: `Nothern Cape`,
    cause: 'Food Distribution'
  },
  {
    name: 'CANSA Cancer Association of South Africa Upington',
    summary: 'An Advocate in the fight against cancer since 1931. With a mission directed at lowering cancer risk, educating the public regarding symptoms, screening and risk reduction, and providing care and support as well as emotional support to all people affected by cancer. Overall it striving to ensure that South African policy makers are influenced with regards to important cancer control issues, and patients’ right to healthcare is protected. ', 
    contact: 'https://cansa.org.za/become-a-volunteer/',
    donate : 'https://cansa.org.za/personal-donation-options/',
    location: `Nothern Cape`,
    cause: 'Health Charities'
  },
  {
    name: 'KwaZulu-Natal Blind and Deaf Society',
    summary:'The KwaZulu-Natal Blind and Deaf Society was established in 1936, with a purpose of providing services and opportunities that ultimately improve the quality of life for the Blind and Partially-Sighted people. Extending a hand to the the poor, unemployed African people living in rural areas who do not have the finances or ability to receive services. Not only are they deprived, but also disabled, which leaves them feeling very inadequate and incapable, and the sad fact is that most of them receive no external assistance',               
    contact: 'http://www.bdskzn.org.za/contact/',
    donate : 'http://www.bdskzn.org.za/support-us/',
    location: `Kwa-Zulu Natal`,
    cause: 'Health Charities'
  },
  {
    name: 'Ithemba lethu',
    summary: 'The heart and purpose of the organisation was, and still is, to bring hope through God’s destiny for vulnerable and orphaned babies, children and youth threatened by the effects of HIV/AIDS, by building resilient and permanent families through reunification, adoption and life skills education. With the start of the first ever breast milk bank the organization is determined in their mission to cared for, nourish and nurture nature for infants effected/orphaned all because of HIV/AIDS but it does not merely stop there the orgnazation also strives to educate kids about HIV. ', 
    contact: 'https://www.ithembalethu.org.za/?page_id=795',
    donate : 'https://www.ithembalethu.org.za/?page_id=792',
    location: `Kwa-Zulu Natal`,
    cause: 'Health Charities'
  },
  {
    name: 'Save the Children',
    summary: 'With more then 65 years since its started Save the children strives to create better futures for all children regardless of background with main arears of focuse being Education child Protection, health and nutrition childrens Rights ',
    contact: 'https://www.savethechildren.org.za/get-involved',
    donate : 'https://www.savethechildren.org.za/donate-2018',
    location: `Kwa-Zulu Natal`,
    cause: 'Shelter and Homeless Services'
  },
  {
    name: 'Vision of love',
    summary: 'Vision of Love (VOL) is an independent registered non profit humanitarian community service project initiated by Royalty Baptist Church based in Regorogile township, Thabazimbi in Limpopo. With the mission of Vision of Love is to alleviate hunger by feeding hungry and child-headed households, as well as provide opportunities for health care and counseling to the senior citizens and HIV/AIDS infected, living in and around Thabazimbi. Services include feeding scheme, HIV/AIDS home based care, food parcels and health care for senior citizens, bereavements services for needy families and counseling programs.', 
    contact: 'http://visionoflove.org.za/contact.html',
    donate: 'http://visionoflove.org.za/support.html',
    location: `Limpopo`,
    cause: 'Food Distribution'
  },
  {
    name: 'Thohoyandou Victim Empowerment Programme',
    summary: 'After opening its doors back in 2002 TVEP offers an integrated range of prevention and support services to combat sexual assault, domestic violence, and child abuse. TVEP doesn’t just support victims and turn them into survivors. TVEP believes that empowered communities are the next step in eliminating sexual and gender-based violence and HIV stigmatisation.', 
    contact: 'https://tvep.org.za/volunteer/',
    donate : 'https://tvep.org.za/donate/',
    location:  `Limpopo`,
    cause: 'Refuge Charities'
  },
  {
    name: 'Lady Khama',
    summary: 'The Lady Khama Charitable Trust was founded in 2002 by her eldest son and current Patron of the Trust, His Excellency Lieutenant General Dr Seretse Khama Ian Khama. The aim is to continue the community work that Lady K. spent so much of her time pursuing. Lady Khama Charitable Trust raises funds for existing Botswana based charities that focus on improving the lives of vulnerable women, children, and people living with disabilities within Botswana.',
    contact: 'https://ladykhamatrust.org/volunteers/',
    donate : 'https://ladykhamatrust.org/donate-securely-online-now/',
    location: `North West`,
    cause: 'Health Charities'
  },
  {
    name: 'Penreach',
    summary: 'Esteblished in 1991 Penreach is an NGO and a social impact organisation working towards educational excellence in disadvantaged rural communities in Mpumalanga. Through innovative coaching, mentoring and training we build the capacity of leaders and educators to deliver quality education to children from 0 years to grade 12 with strong rooting in early childhood development.',
    contact: 'https://penreach.co.za/contact/',
    donate : 'https://www.payfast.co.za/donate/go/penreachnpc',
    location: `Mpumalanga`,
    cause: 'Education Charities'
  },
  {
    name: 'Sizanani',
    summary: 'Founded in 1993  primarily as a residential facility for children and young adults with moderate to profound intellectual and physical disabilities. Its aim being to develop, empower and care for people with disabilities in order to improve their quality of life; through working intensively with the beneficiaries, their families, the employees and the surrounding communities.',
    contact: 'https://www.sizanani.org/help/volunteerism',
    donate : 'https://www.sizanani.org/help/donate',
    location: `Gauteng`,
    cause: 'Health Charities'
  },
  {
     name: 'DAKTARI Bush School & Wildlife Orphanage',
    summary: 'With the mission of he mission of DAKTARI is to educate and inspire local children to value their environment and stimulate community development. The project, which combines the education of underprivileged children and a wildlife orphanage, is a registered non-profit organisation located at the heart of the Limpopo Province of South Africa! This exceptional experience provides volunteers with the unique opportunity of not only caring for some of South Africa’s most iconic species, but also of using these animals as a tool to inspire a generation of underprivileged schoolchildren to become passionate about wildlife conservation.  ', 
    contact: 'https://daktaribushschool.org/volunteer/',
    donate : 'https://daktaribushschool.org/donate/',
    location: `Limpopo`,
    cause: 'Arts, Culture and Humanities Charities'
  },
  {
    name: 'ENGO - ETERNAL HOPE',
    summary: 'With poverty relief seen as the biggest task in the province. Engo Provincial Governance Board is responsible for the planning, coordination and facilitation of social services in order to enhance the social welfare, care, development and treatment of individuals, families, groups and communities in the Free State in order to relife poverty. The service was comprehensive and included family care offices, children’s homes, old age homes, a home for unwed mothers, a centre for alcoholics and the training of students.', 
    contact: 'https://www.engo.co.za/eng/volunteers.php',
    donate : 'https://www.engo.co.za/eng/donations.php',
    location: `Free State`,
    cause: 'Shelter and Homeless Services'
  },
  {
    name: 'U-turn ',
    summary: 'U-turn fouces on equipting the homeless will adiquit skills in order to turn their lives around and still be able to sustain it. The phased programme starts with basic needs relief, like food and clothing, available at our First Phase Service Centre. It continues on to Drug and Alcohol Rehabilitation Support, and finally culminates in a work-based learnership that lasts on average 19 months, called the “Life Change” programme, which nurtures an individual’s personal and vocational skills, as well as relapse prevention.', 
    contact: 'http://homeless.org.za/volunteer/',
    donate : 'http://homeless.org.za/donate/',
    location: `Free State`,
    cause: 'Arts, Culture and Humanities Charities'
  }
];


export default charities;