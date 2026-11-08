const matches = {
    "Absolute monarchy": "It is legal because I wish it.",
    "Agorism": "Every action you take outside the scope of government control strengthens the market and weakens the state.",
    "Anarcho-capitalism": "It is evident that the State needs the intellectuals. It is not so evident why intellectuals need the State.",
    "Anarcho-collectivism": "When the people are being beaten with a stick, they are not much happier if it is called the People's Stick.",
    "Anarcho-communism": "Prisons are universities of crime, maintained by the state.",
    "Anarcho-distributism": "One sees great things from the valley; only small things from the peak.",
    "Anarcho-primitivism": "There is good reason to believe that primitive man suffered from less stress and frustration and was better satisfied with his way of life than modern man is.",
    "Anarcho-syndicalism": "The state can only be what it is: the defender of mass exploitation and social privileges, the creator of privileged classes and castes and of new monopolies.",
    "Autonomism": "Disobedience to authority is one of the most natural and healthy acts.",
    "Avaritionism": "I have a dream. That one day every person in this nation will control their own destiny. A nation of the truly free, dammit. A nation of action, not words, ruled by strength, not committee!",
    "Bleeding-heart libertarianism": "",
    "Bordigism": "The hell is the firm, not the fact it has a boss.",
    "Camattism": "The human being is dead and is no more than a ritual of capital.",
    "Castroism": "They talk about the failure of socialism, but where is the success of capitalism?",
    "Classical fascism": "The truth is that men are tired of liberty.",
    "Clerical fascism": "You must train harder than the enemy who is trying to kill you. You will get all the rest you need in the grave.",
    "Combatocracy": "Only the weak are cruel. Gentleness can only be expected from the strong.",
    "Council communism": "In order that some may lead, others must be powerless. To be the vanguard of the workers, the elite has to usurp all social key positions.",
    "De Leonism": "Make no mistake: The organization of the working class must be both economic and political. The capitalist is organized upon both lines. You must attack him on both.",
    "Democratic socialism": "The future belongs to the socialism which is democratic, to the democracy which is socialist.",
    "Dengism": "It doesn't matter if a cat is black or white, as long as it catches mice.",
    "Distributism": "Men feel that cruelty to the poor is a kind of cruelty to animals. They never feel that it is an injustice to equals.",
    "Distributist libertarianism": "The poor have sometimes objected to being governed badly. The rich have always objected to being governed at all.",
    "Esoteric fascism": "The blood of the heroes is closer to God than the ink of the philosophers and the prayers of the faithful.",
    "Fourth theory": "If you are in favour of global liberal hegemony, you are the enemy.",
    "Geo-anarchism": "As no man made the land, so no man can claim a right of ownership in the land.",
    "Geo-libertarianism": "It is not the business of government to make men virtuous or religious, or to preserve the fool from the consequences of his own folly.",
    "Georgism": "Free trade, free land, free people.",
    "Hoppeanism": "Democracy has nothing to do with freedom. Democracy is a soft variant of communism.",
    "Kraterocracy": "Might makes right.",
    "Left-rothbardianism": "Libertarianism is rejected by the modern left, which preaches individualism but practices collectivism. Capitalism is rejected by the modern right, which preaches enterprise but practices protectionism.",
    "Libertarian socialism": "Socialism will be free, or it will not be at all.",
    "Luxemburgism": "Those who do not move, do not notice their chains.",
    "Machajskism": "The proletarians are told that the intelligentsia is not implicated in exploitation and lives by selling its own intellectual work power.",
    "Maoism": "War can only be abolished through war, and in order to get rid of the gun it is necessary to take up the gun.",
    "Market anarchism": "Capitalism depends on ever-growing amounts of regulation in the market for its survival, and the system is hitting the point where the teat runs dry.",
    "Market socialism": "To achieve a society that exhibits liberty, equality, fraternity and democracy, the object to change first and foremost is production.",
    "Marxism-leninism-maoism": "Today's Maoist parties are, without doubt, continuators of yesteryear communist parties. But their foundations must be the heights attained by Maoism in the vanguard concept, not the outlook or methods of their past.",
    "Marxism-leninism": "In the Soviet Union, it takes more courage to retreat than advance.",
    "Marxism": "The last capitalist we hang shall be the one who sold us the rope.",
    "Mesoconservatism": "Those who believe in nothing are very, very jealous and angry at those who believe in something.",
    "Minarchism": "Individuals have rights, and there are things no person or group may do to them.",
    "Mutualism": "The great are only great because we are on our knees. Let us rise.",
    "National anarchism": "Today, only the person who no longer believes in a happy ending, only he who has consciously renounced it, is able to live.",
    "National bolshevism": "A country whose population gets its living by cheating is a bad country.",
    "National capitalism": "Material loss can be made up through renewed labor, but the moral wrong which has been inflicted upon the conquered peoples, in the peace dictates, leaves a burning scar on the people's conscience.",
    "National socialism": "Anyone can deal with victory. Only the mighty can bear defeat.",
    "National syndicalism": "Nothing is more false than the axiom that governments are belligerent and peoples are pacific.",
    "Neo-libertarianism": "It's far more common for leftists to routinely pick up weapons and try to kill those with whom they disagree than it is for those on the other side of the ideological spectrum.",
    "Neocameralism": "It is not a coincidence that the century of murder and the century of democracy were one and the same.",
    "Neoconservatism": "I just want you to know that, when we talk about war, we're really talking about peace.",
    "Neoliberalism": "Eat some chocolate chocolate chip.",
    "Noocracy": "If you do not take an interest in the affairs of your government, then you are doomed to live under the rule of fools.",
    "Ordoliberalism": "When it comes to human dignity, we cannot make compromises.",
    "Paleoconservatism": "I oppose any regulation of private property, but when I see some developer clear-cutting one-hundred-year-old trees, I want to pass a law to pound the hell out of him.",
    "Paleolibertarianism": "Real patriotism is a willingness to challenge the government when it's wrong.",
    "Paternalistic conservatism": "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
    "Right-libertarianism": "When one gets in bed with government, one must expect the diseases it spreads.",
    "Situationism": "Never work.",
    "Social democracy": "Better things are not possible.",
    "Social distributism": "To be clever enough to get all that money, one must be stupid enough to want it.",
    "Social georgism": "Laissez faire opens the way to the realization of the noble dreams of socialism.",
    "Social liberalism": "A person may cause evil to others not only by his actions but by his inaction, and in either case he is justly accountable to them for the injury.",
    "Social libertarianism": "I'm a capitalist, and I believe that universal basic income is necessary for capitalism to continue.",
    "Social nationalism": "It is not that miserable if a person dies, as every single man dies each day. The true misery is if a person lives like being dead.",
    "State socialism": "In this sense, the theory of the Communists may be summed up in the single sentence: Abolition of private property.",
    "Strasserism": "We must take from the right nationalism without capitalism and from the left socialism without internationalism.",
    "Syndicalism": "Nothing can so impress the mind and soul of the worker as this enduring battle for daily bread.",
    "Technocracy": "A criminal is a person with predatory instincts who has insufficient capital to form a corporation.",
    "Theocracy": "He who doesn't pray to the Lord prays to the devil.",
    "Titoism": "With them, the basic factor is the class issue, with us, it is both the nationalities and the class issue.",
    "Trotskyism": "You may not be interested in war, but war is interested in you."
}

function result(match) {
    const quote = matches[match] ?? "Match not found"
    document.getElementById("quiz").style.display = "none"
    document.getElementById("results").style.display = "block"
    document.getElementById("match").textContent = match
    document.getElementById("flag").src = "./flags/" + match + ".svg"
    document.getElementById("quote").textContent = quote
}

function question(question, aText, bText, cText, dText, aHandler, bHandler, cHandler, dHandler) {
    const questionText = document.getElementById("question")
    const aButton = document.getElementById("a");
    const bButton = document.getElementById("b");
    const cButton = document.getElementById("c");
    const dButton = document.getElementById("d");

    questionText.textContent = question

    if (aText) {
        aButton.style.display = "inline-block";
        aButton.querySelector(".option").textContent = aText;
        aButton.onclick = aHandler;
    } else {
        aButton.style.display = "none";
    }

    if (bText) {
        bButton.style.display = "inline-block";
        bButton.querySelector(".option").textContent = bText;
        bButton.onclick = bHandler;
    } else {
        bButton.style.display = "none";
    }

    if (cText) {
        cButton.style.display = "inline-block";
        cButton.querySelector(".option").textContent = cText;
        cButton.onclick = cHandler;
    } else {
        cButton.style.display = "none";
    }

    if (dText) {
        dButton.style.display = "inline-block";
        dButton.querySelector(".option").textContent = dText;
        dButton.onclick = dHandler;
    } else {
        dButton.style.display = "none";
    }
}

question(
    "Should private property exist?",
    "Yes",
    "No",
    "",
    "",
    sovereign,
    markets,
    null,
    null
)

function sovereign() {
    "Should there be a sovereign with absolute power?",
        "Yes",
        "No",
        "",
        "",
        sovereigntype,
        distribution,
        null,
        null
}

function sovereigntype() {
    question(
        "Who should be such sovereign?",
        "Heir",
        "CEO",
        "Sage",
        "Priest",
        r_absoluteMonarchy,
        r_neocameralism,
        r_noocracy,
        r_theocracy
    )
}

function distribution() {
    "Should private property be made as widely owned as possible?",
        "Yes",
        "No",
        "",
        "",
        distregulation,
        lvt,
        null,
        null
}

function r_absoluteMonarchy() {

}

function r_neocameralism() {

}

function r_noocracy() {
    result("Noocracy")
}

function r_theocracy() {

}

function markets() {

}