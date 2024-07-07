// src/Accordion.js
import React, { useState } from "react";
import "./Faq.css"; // Add some basic CSS
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  let faqs = [
    {
      question: "How do I change my password?",
      answer:
        'After you have logged in, you can change your password using the "Change password" option in the top part of the screen. You have to type your current password and the new password you have chosen in their respective boxes.',
      found_duplicate: false,
    },
    {
      question: "When will I receive my changed ATM PIN?",
      answer:
        "You will receive your new ATM PIN by post within 10 days from when your request has been submitted.",
      found_duplicate: false,
    },
    {
      question: "Can I get my newly generated PIN online?",
      answer: "No, for security reasons we send you your ATM PIN only by post.",
      found_duplicate: false,
    },
    {
      question: "How can I register for Autopay?",
      answer:
        'To register for Autopay: Step 1: Click on the "Autopay register" link on the left side margin. Step 2: Select the Credit Card number that you want to register for the Autopay facility and your HDFC Bank account number from which you want your Credit Card payments to be made. Step 3: If you want the full amount of your statement to be paid from your bank account select the "Total amount due" link, and if you want only the minimum amount due (5% of total amount) to be paid, select "Minimum Amount Due". Step 4: Click on "Continue" and then on "Confirm". A message will be displayed on the screen confirming the successful registration of your Credit Card for Autopay. Please note that it takes 7 days to activate the Autopay facility for your Credit Card account. If your payment due date is 7 days, or less, away from the date of registration for Autopay kindly pay your monthly bill through your usual payment mode as Autopay will only be effective from the next billing cycle.',
      found_duplicate: false,
    },
    {
      question: "Can Chip Credit cards be used anywhere?",
      answer:
        "Yes, your HDFC Bank Chip Credit card can be used anywhere in the world wherever Visa/MasterCard are accepted. At a chip-enabled terminal, you can insert your Chip card into a POS Terminal. If you are using your Chip card at a location that does not have a chip-enabled terminal, your card will be swiped and the transaction will be completed with your signature as in case of a regular card transaction. PAY Cards, Bill Payment, Money Transfer, Recharge... Money Transfer National Electronic Funds Transfer",
      found_duplicate: false,
    },
    {
      question:
        "What information is required to use the e-monies NEFT service?",
      answer:
        "To use this service, you should provide the beneficiary details (name and account number), and the name and IFSC of the beneficiary bank branch.",
      found_duplicate: false,
    },
    {
      question:
        "If the money is not credited to the beneficiarys account while using the e-monies NEFT service, will I get it back?",
      answer:
        "Your funds will be returned to your account if they are not credited.",
      found_duplicate: false,
    },
    {
      question: "Can I use e-Monies NEFT for foreign remittances?",
      answer:
        "This is a service designed only for remitting Indian Rupees within India.",
      found_duplicate: false,
    },
    {
      question: "What is IFSC? How is it different from the MICR code?",
      answer:
        "IFSC stands for Indian Financial System Code. It is an 11 digit, alpha numeric code designed to identify bank branches in India. The MICR code uses 9 digits to identify bank branches.",
      found_duplicate: false,
    },
    {
      question:
        "What are the charges for the e-monies National Electronic Funds Transfer service?",
      answer:
        "NEFT transactions on NetBanking are charged as below:Amounts up to Rs. 10,000 - Rs.2.5 (exclusive of taxes) per transaction Amounts from Rs.10,001 to Rs.1 lakh - Rs. 5 (exclusive of taxes) per transaction Amounts above Rs. 1 lakh up to Rs. 2 lakh - Rs. 15 (exclusive of taxes) per transactionAmounts above Rs.2 lakh Rs.25 (exclusive of taxes) per transaction",
      found_duplicate: false,
    },
    {
      question: "How does the e-monies NEFT service differ from RGTS and EFT?",
      answer:
        "E-Monies NEFT is an electronic payment system, used to transfer funds to any part of India. It works on net settlement, unlike RTGS that works on gross settlement, and EFT which is restricted to only 15 centres.",
      found_duplicate: false,
    },
    {
      question:
        "Is the e-Monies NEFT system better than the existing RBI-EFT system?",
      answer:
        "E-Monies NEFT has no restrictions, because its based on a centralized network. Thats not the case for the RBI-EFT system, which is confined to just 15 centres. RTGS funds transfer",
      found_duplicate: false,
    },
    {
      question: "How do I check the IFSC of the receiving branch?",
      answer:
        "Just ask your beneficiary to get the IFSC from his or her branch. They can also find it in their cheque book - the IFSC is in the cheque leaf.",
      found_duplicate: false,
    },
    {
      question:
        "What information do I need to provide when using the RTGS funds transfer service?",
      answer:
        "When using RTGS Funds Transfers, there are a few essential details to provide:Amount to be remittedAccount number from where the funds will be debitedName of the beneficiary bank, and the name of the beneficiary customerAccount number of the beneficiary customerSender to receiver information, if there is oneThe IFSC code of the receiving branch",
      found_duplicate: false,
    },
    {
      question:
        "If the money is not credited successfully, will the remitting customer get the funds back?",
      answer:
        "With RTGS, the receiving bank should credit the account of the beneficiary instantly. If for some reason the money cannot be credited, the receiving bank has to return the money to the remitting bank within 1 hour. As soon as the money is returned, the original debit entry in the customer's account is reversed.",
      found_duplicate: false,
    },
    {
      question:
        "How long does it take for funds to be transferred from one account to another?",
      answer:
        "Real-time means that beneficiary branches are expected to receive the funds as soon as they are transferred by the remitting bank. The beneficiary bank must credit the beneficiary's account within 30 minutes of receiving the funds transfer message.",
      found_duplicate: false,
    },
    {
      question: "Are there minimum or maximum limits for RTGS transfers?",
      answer:
        "The RTGS system has been designed for large value transactions.The minimum amount to be remitted through RTGS is Rs. 2 Lakhs. There is no upper ceiling for RTGS transactions.The only change to this is RTGS transactions done through NetBanking, when the maximum amount of funds that can be transferred per Customer ID per day is Rs. 10 Lakhs.",
      found_duplicate: false,
    },
    {
      question:
        "How is RTGS different from National Electronic Funds Transfer (NEFT)?",
      answer:
        "NEFT is an electronic fund transfer system that operates on a deferred net settlement (DNS) basis, which settles transactions in batches.In DNS, the settlement takes place at a definite time and all transactions are held up till that instant. Any transaction initiated after a designated settlement time will have to wait till the next designated settlement time. RTGS is different because transactions are processed continuously.",
      found_duplicate: false,
    },
    {
      question: "What is RTGS Funds Transfer?",
      answer:
        "'RTGS' stands for 'Real Time Gross Settlement'. The RTGS system is a funds transfer mechanism where transfer of money takes place from one bank to another on a 'real time' and on a 'gross' basis. This is the fastest possible money transfer system through banking channels.'Real time' means no waiting period; transactions are settled as soon as they are processed. 'Gross settlement' means the transaction is finalized on its own, without it being bunched with any other transaction.",
      found_duplicate: false,
    },
    {
      question: "What are the charges for the RTGS funds transfer service?",
      answer:
        "Effective 15 November, 2010; RTGS transactions on NetBanking are charged as below :Rs. 2 lac to Rs. 5 lac - Rs. 25 (inclusive of taxes) per transactionAbove Rs. 5 lac - Rs. 50 (inclusive of taxes) per transactionNote: RTGS transfers can be done for amounts exceeding Rs. 2,00,000 only whereas for NEFT there are no such amount restrictions. Cards Credit Cards All Credit Cards",
      found_duplicate: false,
    },
    {
      question:
        "Why is the customer required to fill a cardholder dispute form (CDF) to report transaction dispute?",
      answer:
        "As per master / visa guidelines, all card holders should provide a duly filled in Cardholder Dispute Form (CDF) mentioning the details of the disputed transaction which will enable / authorize the bank to investigate with the respective Merchant / Member BankPls click on link below to view the cardholder dispute form.http://www.hdfcbank.com/assets/pdf/transaction_dispute_form.doc",
      found_duplicate: false,
    },
    {
      question:
        "What is the time frame to report Credit card transaction dispute?",
      answer:
        "Transaction dispute needs to be reported in writing within 60 days from the statement date in which the said transaction appears.",
      found_duplicate: false,
    },
    {
      question:
        "How do I report a transaction dispute incurred using my credit card?",
      answer:
        "Please call our 24 Hours customer care to report the loss of the card and block the same. http://www.hdfcbank.com/personal/find-your-nearest/find-phone-bankingNote : Transaction dispute needs to be reported in writing within 60 days from the statement date in which the said transaction appears.",
      found_duplicate: false,
    },
    {
      question: "How do I get my add-on Card issued?",
      answer:
        "Click on the below link to download the add-on forms http://www.hdfcbank.com/assets/pdf/add_on_card_application.pdfPlease complete the forms and send it to HDFC Bank Cards Division with supporting document. You can forward the letter to below addressManager, HDFC Bank Cards Division,PO BOX # 8654Thiruvanmiyur POChennai - 600 041.",
      found_duplicate: false,
    },
    {
      question:
        "I do not want statements to be sent to my mailing address. How do I stop the same?",
      answer:
        "We request you to download the physical statement suppression MID (Most Important Document) from HDFC Bank form center and send the duly signed form to our correspondence address.HDFC Bank Cards Division PO BOX # 8654 Thiruvanmiyur P.O. Chennai 600",
      found_duplicate: false,
    },
    {
      question: "How do I register for E-statement facility?",
      answer:
        'To register for statement on e-mail you have to:Through NETBANKINGLogin to NetbankingClick on the "Statement on E-mail" link on the left side margin.Select "Office" or "Residence" (This ensures your email statement is sent to either your office or personal Email address).Accordingly your office or residence Email ID will be displayed in the next input box. Click on "Continue" and "Confirm".A message will appear confirming your request for statement on E-mail. Please note down the reference number which appears above the confirmation message as it will be useful for any further communication with us. Through PHONEBANKINGWe request you to contact our Phone Banking officers at any of our 24 hour Phone Banking numbers mentioned in the belowURL- http://www.hdfcbank.com/personal/find-your-nearest/find-phone-banking',
      found_duplicate: false,
    },
    {
      question: "I have not received my Credit Card?",
      answer:
        "Generally, your Credit Card is delivered within 21 working days of submitting your application. If you have registered your mobile number with us, you will receive timely alerts informing you about the status and details of the dispatch of your Credit Card. If you have received the alert on Airway Bill number (courier reference) on your mobile number provided in Credit card application form. You can track the status of the shipment using the Airway Bill number by visiting the courier websites.",
      found_duplicate: false,
    },
    {
      question: "How do I read my statement?",
      answer:
        "Your statement is divided mainly into three parts. The first part informs you about the major amounts associated with your Card, such as,Date of your statementYour Card numberYour payment due dateMinimum amount due etc.The second part has a date-wise detail itinerary of your purchases, payments, fees and interest charges, if any. All your transactions are listed here. The last part has information regarding your total outstanding balance, etc. At the bottom of the statement your Reward Point status is also mentioned. You also receive details on the latest offers on your Card",
      found_duplicate: false,
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="accordion pt-12">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Faq;
