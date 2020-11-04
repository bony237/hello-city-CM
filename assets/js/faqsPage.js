//database of topics and their contents

const database = [
    { 
        topic: "delivery",
        faqs: [
            { question: "How can I find your international delivery information ?", link: "" },
            { question: "Will my parcel be charged customs and import charges ?", link: "" },
            { question: "How does shipping to New Zealand work ?", link: "" },
            { question: "Can you tell me more about your Premier Delivery service in the United Arab Emirates ?", link: "" },
            { question: "Can you tell me more about your Premier Delivery service in Saudi Arabia ?", link: "" },
            { question: "How are customs charges applied to orders sent to New Zealand ?", link: "" },
            { question: "How do deliveries to Singapore work ?", link: "" },
            { question: "How do deliveries to Israel work ?", link: "" },
            { question: "How do deliveries to Hong Kong work ?", link: "" },
            { question: "My order is being delivered to Qatar or Israel, do I need to present anything at the time of delivery ?", link: "" },
            { question: "Can you tell me more about your Premier Delivery service to Hong Kong ?", link: "" },
            { question: "Can you tell me more about your Premier Delivery service to Singapore ?", link: "" },
        ],
    },
    {
        topic: "returns",
        faqs: [
            { question: "What is your Returns Policy ?", link: "" },
            { question: "How do I return something to you ?", link: "" },
            { question: "Can I return an item for an exchange instead of a refund ?", link: "" },
            { question: "I'm an International customer, have you received my returned items ?", link: "" },
            { question: "What happens to my refund if I return between 29 and 45 days ?", link: "" },
            { question: "How can I get a new returns slip ?", link: "" },
            { question: "How do I return my order from Hong Kong ?", link: "" },
            { question: "How do I return my order from Switzerland ?", link: "" },
            { question: "How do I return my order from New Zealand ?", link: "" },
            { question: "How do I return my order from Saudi Arabia or United Arab Emirates ?", link: "" },
            { question: "I've paid with Klarna, how do returns work ?", link: "" },
            { question: "I've paid with Afterpay, how do returns work ?", link: "" },
        ],
    },
    {
        topic: "order",
        faqs: [
            { question: "Can I amend my order after I've placed it ?", link: "" },
            { question: "I've received a faulty item, what should I do ?", link: "" },
            { question: "I'm missing an item from my order, what do I do ?", link: "" },
            { question: "I've received an incorrect item in my order, what do I do ?", link: "" },
            { question: "How can I cancel my order - Consumer Contracts Regulations 2013", link: "" },
            { question: "I've bought a gift voucher, can I cancel or return it ?", link: "" },
            { question: "I’ve cancelled my order – when will my money be available again ?", link: "" },
            { question: "Why is the product code on my delivery note different from the website ?", link: "" },
            { question: "What if something isn’t right on my customs invoice ?", link: "" },
        ],
    },
    {
        topic: "products",
        faqs: [
            { question: "Where can I find your size guide ?", link: "" },
            { question: "What is Save for Later ?", link: "" },
            { question: "Where can I find your care instructions ?", link: "" },
            { question: "Will you be getting more stock ?", link: "" },
            { question: "How do I change my information on Fit Assistant ?", link: "" },
            { question: "Why does the 'your edit' feature only show 30 items ?", link: "" },
            { question: "Why are there only 5 filter options for 'My Edits' ?", link: "" },
            { question: "Can you tell me about California’s Proposition 65 ?", link: "" },
            { question: "How can I find out about your Ethical sourcing policy ?", link: "" },
            { question: "Can you give me more information about your products ?", link: "" },
            { question: "Can you tell me more about Collusion ?", link: "" },
            { question: "Can you tell me more about your modest fashion edit ?", link: "" },
        ],
    },
    {
        topic: "payment",
        faqs: [
            { question: "How do I place an order ?", link: "" },
            { question: "How can I pay for my order ?", link: "" },
            { question: "My payment was declined, what should I do ?", link: "" },
            { question: "How do I use my Gift Voucher to pay for an order ?", link: "" },
            { question: "How can I purchase an ASOS gift voucher ?", link: "" },
            { question: "I’m a student but my email address hasn't been validated for my discount code", link: "" },
            { question: "When will I be charged for my order ?", link: "" },
            { question: "How does Afterpay work in New Zealand ?", link: "" },
            { question: "How do I pay using Google Pay ?", link: "" },
            { question: "What currencies can I use to place an order ?", link: "" },
            { question: "How do I use PayPal to pay for my order ?", link: "" },
            { question: "Will I be charged International Bank Fees when ordering ?", link: "" },
        ],
    },
    {
        topic: "technical",
        faqs: [
            { question: "How do I create an account ?", link: "" },
            { question: "Do I need to create an account to shop with you ?", link: "" },
            { question: "How do I sign up for ASOS notifications ?", link: "" },
            { question: "I'm having trouble signing into my account", link: "" },
            { question: "I'm having problems using your App", link: "" },
            { question: "Browser Support", link: "" },
            { question: "I'm having trouble accessing your website. What should I do ?", link: "" },
            { question: "I'm having trouble accessing My Account pages", link: "" },
            { question: "Why do I need to enter my password every time I sign into my account pages on the App ?", link: "" },
            { question: "How do I link my social media account to my ASOS account ?", link: "" },
            { question: "I'm having trouble entering an address on my account", link: "" },
            { question: "I'd like to close my account with ASOS, what should I do ?", link: "" },
        ],
    }
];

const firstTopic = 'delivery';

document.addEventListener('DOMContentLoaded', () => {
    
    displayNewFaqs(firstTopic)

    // Change data displayed on a click event
    $('.topics > div').on('click', function() {
        let isCurrentTopic = $(this).hasClass('active')

        if(!isCurrentTopic) {
            $('.topics > div').removeClass('active')
            displayNewFaqs(this.dataset.topic)
            $(this).addClass('active')
        }

    })

    
});


function displayNewFaqs(newTopic) {
    $('#faqs-displayed > div').hide();
    //setTimeout( 10 , 1000);
    const [ { faqs } ] = database.filter(({ topic }) => topic === newTopic)
    
    //console.log(faqs)
    let templateFaq = Handlebars.compile($('#faqs-displayed-template').html())
    $('#faqs-displayed > div').html(templateFaq({ topic: newTopic, numberFaqs: faqs.length, faqs: faqs }))

    $('#faqs-displayed > div').show('slow');
}

