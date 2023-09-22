import React from "react";
import Navbar from "../containers/Navbar";
// import { img } from "../constants";
import img from "../constants";
import Footer from "../containers/Footer";
import Card from "../containers/Card";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="h-full w-full bg-midnight to-night  relative">
        <img
          src={img.water}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="py-4" />
        <div className=" sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <h1 className="text-silver lg:text-4xl md:3xl sm:xl p-24 text-center font-bold tracking-wide font-serif">
            "Who is it that would loan Allah a goodly loan so He may multiply it
            for him many times over? And it is Allah who withholds and grants
            abundance, and to Him you will be returned." (Quran 2:245)
          </h1>
        </div>
        <div className="place-content-center items-center justify-center flex-colomn ">
          {/* <h2 className="text-3xl text-white text-center font-semibold">
            Help Children and The Poor
          </h2> */}
          <div className="p-6" />

          <div className="flex justify-center items-center">
            <Link to="/donate">
              <button className="text-2xl font-bold bg-gradient-to-r from-lime1 hover:from-hover hover:to-silver p-8 rounded-lg to-lime2 relative">
                Donate Us
              </button>
            </Link>
          </div>
          <div className="p-32" />
        </div>
      </div>
      <div className="h-full w-full bg-gradient-to-r from-midnight to-night  relative items-center justify-center">
        <div className="flex justify-center items-center">
          <img
            src={img.logo}
            alt="Logo"
            className="items-center justify-center"
            width={270}
          />
        </div>

        <p className="text-5xl text-silver text-center mx-4 p-6 font-semibold tracking-wide font-sans">
          Services provided by FCO
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div>
            <Card
              image={img.hlp1}
              title={"Quran as a Charity: Empowering Young Minds"}
              description={`In the heart of the beautiful city of Jimma, a local charity organization embarked on a mission to empower the young minds of the community. Recognizing the significance of education and spiritual nourishment, the organization decided to donate Qurans as a form of charity to children in need. This act of kindness not only provided access to a sacred text but also ignited a profound impact on their lives. Let us delve into the story of how this Quran charity project touched the hearts of children in Zanzibar.
    
    The impact of the Quran charity project was profound, touching the lives of countless children in Jimma. For many, it was their first personal copy of the Quran, a possession they could call their own. The children eagerly embraced this gift, embracing the opportunity to explore its teachings, recite verses, and develop a deeper understanding of their faith.

    Beyond the spiritual aspect, the Qurans also played a significant role in enhancing their educational journey. With limited access to educational resources, the children found solace and enrichment in the verses of the Quran. They discovered stories of prophets, lessons of morality, and guidance for leading a righteous life. The project not only provided a valuable resource for their religious studies but also instilled a love for reading, critical thinking, and personal growth.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp2}
              title={
                " Quenching Thirst : Clean Tap Water Project Transforms a Local rural Community"
              }
              description={`Access to clean and safe drinking water is a fundamental human right, yet many communities around the world still struggle with this basic necessity. In the rural area of ethiopia, a local initiative took root to address this pressing issue and bring clean tap water to a community in need. This blog highlights the remarkable journey of the clean tap water project and its transformative impact on the lives of the local residents.
              The clean tap water project aimed to provide a sustainable solution to the water scarcity issue. The community became the focus of attention, with the project team working tirelessly to design and implement a system that would bring safe and clean water directly to their households. The installation of tap water infrastructure and purification mechanisms became a beacon of hope for the residents, promising a healthier and brighter future.
              As the clean tap water project reached its completion, the impact on the lives of the local residents became evident. Families no longer had to spend hours collecting water from distant sources or worry about the quality of the water they consumed. The availability of clean tap water not only improved their overall health and well-being but also freed up time for education, income-generating activities, and personal development.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp3}
              title={
                "Spreading Joy and Festivity: Clothing Drive Brings Holidays Delight to Ethiopian Local Children"
              }
              description={`Eid al-Fitr, a joyous celebration marking the end of Ramadan, holds a special place in the hearts of Muslims around the world. In the vibrant streets of Jimma, a local initiative set out to make this festive occasion even more memorable for the underprivileged children of the community. Through a heartwarming clothing drive, the project aimed to bring smiles, confidence, and a sense of belonging to these young souls. Join us as we delve into the story of how this initiative ignited the spirit of Eid and embraced the local children in Jimma.
              The clothing drive commenced weeks before Eid, with the community rallying together to collect gently used or new clothes. Donations poured in from individuals, local businesses, and organizations, all eager to contribute to the cause. The project team meticulously sorted, washed, and prepared the donated clothes, ensuring they were in pristine condition for the children.
              The impact of the clothing drive extended far beyond the tangible items provided. Each child received more than just clothes; they received a sense of self-confidence and belonging. The new outfits allowed them to celebrate Eid with dignity, boosting their self-esteem and fostering a sense of pride. The project not only addressed their material needs but also emphasized their inherent worth and importance within the community.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp4}
              title={
                "Nourishing Hearts: Feeding Children during Holiday Festival in Jimma"
              }
              description={`Eid al-Fitr, a time of celebration and gratitude, holds a special place in the hearts of Muslims around the world. In the vibrant community of Jimma, a local initiative embraced the spirit of generosity by providing nourishing meals to underprivileged children during the festive occasion. This blog recounts the inspiring story of how this feeding program brought joy, sustenance, and a sense of togetherness to the local children, making their Eid al-Fitr truly memorable.
              The feeding program for Eid al-Fitr required meticulous planning and coordination. Volunteers from the community joined hands with local organizations, businesses, and generous donors to gather resources, including food supplies and necessary equipment. The team worked tirelessly to ensure that the meals would be nutritious, delicious, and prepared with love.
              The feeding program went beyond providing a meal; it created a feast for the senses. The vibrant colors, enticing aromas, and flavorful tastes of the food delighted the children, fostering an atmosphere of joy and celebration. The program not only satisfied their physical hunger but also nourished their spirits, reminding them that they are cherished members of the community.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp5}
              title={
                "Building Bridges of Friendship and Harmony: Uniting Ethiopia's Local Children"
              }
              description={`Friendship knows no boundaries and has the power to bridge differences, foster understanding, and create harmony. In the enchanting community of Ethiopia, local initiatives have been working tirelessly to nurture friendships among the local children. This blog celebrates the transformative journey of building bridges of friendship and harmony, highlighting the positive impact it has had on the lives of Zanzibar's young ones.
              Ethiopia is a place where diversity flourishes, with people from various cultural, ethnic, and religious backgrounds residing side by side. Recognizing the richness of this diversity, initiatives have emerged to bring children from different backgrounds together, encouraging them to embrace their unique identities while fostering a sense of unity. By creating opportunities for interaction, children learn to appreciate and respect one another's differences, laying the foundation for lasting friendships.
              To foster friendship and harmony, local initiatives organize cultural exchange programs for children. Through these programs, children have the opportunity to learn about different cultures, traditions, and languages. They engage in storytelling sessions, arts and crafts activities, and traditional games, allowing them to develop a deep appreciation for their peers' heritage. This cultural exchange nurtures empathy, broadens perspectives, and cultivates a sense of unity among the children.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp6}
              title={
                "Building Bridges of Faith and Knowledge: Constructing a Mosque and Madrasa in Jimma Local Community"
              }
              description={`Mosques and madrasas are not just architectural structures but pillars of religious and educational growth within communities. In the captivating land of ethiopia, a local initiative embarked on a transformative journey to construct a mosque and madrasa for the benefit of the local population. This blog chronicles the inspiring story of how this endeavor created spaces of worship and learning, nurturing faith and knowledge within the community.
              Faith and education form the cornerstone of a thriving community. Recognizing this, the local community in Ethiopia rallied together to establish a mosque and madrasa, understanding that these institutions would not only provide a space for spiritual devotion but also foster intellectual growth and moral development. The project aimed to create a foundation for individuals to connect with their faith and access quality education.
              The construction of the mosque and madrasa became a symbol of unity and solidarity within the community. People from all walks of life, irrespective of their backgrounds, contributed their resources, skills, and time to bring this project to fruition. The shared goal of building a place of worship and learning transcended differences, reinforcing the importance of collaboration and collective responsibility.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp7}
              title={
                "Spreading Joy and Sharing Blessings: Distributing Zakat al-Fitr to Ethiopians Local Children"
              }
              description={`Zakat al-Fitr, also known as Fitrana or Sadaqat al-Fitr, is a special charitable contribution given during the auspicious time of Eid al-Fitr. In the enchanting land of Ethiopia, the local community comes together to embrace the spirit of giving by distributing Zakat al-Fitr to the underprivileged children. This blog encapsulates the heartwarming story of how this act of generosity brings smiles, joy, and blessings to the lives of the local children in Ethiopia.
              Distributing Zakat al-Fitr in Ethiopia unifies the community and strengthens the bonds of brotherhood and sisterhood. People from all walks of life, irrespective of their economic backgrounds, contribute their share of Zakat al-Fitr, recognizing the importance of collective responsibility in uplifting those who are less fortunate. The act of giving becomes a testament to the community's compassion and commitment to ensuring that every child experiences the joy of Eid.
              On the blessed day of Eid al-Fitr, the distribution event takes place, creating an atmosphere of excitement and anticipation. The children gather eagerly, their eyes filled with anticipation as they receive their gifts of Zakat al-Fitr. The joy that radiates from their faces is priceless, and their gratitude warms the hearts of everyone involved. This act of giving not only provides material support but also instills a sense of love, care, and belonging in the hearts of the children.`}
            />
          </div>
          <div>
            <Card
              image={img.hlp8}
              title={
                "Nurturing Hearts and Guiding Minds: Care and Parenting in Ethiopia Local Community"
              }
              description={`Parenting is a universal journey filled with love, challenges, and the desire to provide the best for our children. In the vibrant community of Ethiopia, parents and caregivers are committed to nurturing the young minds and hearts of their children. This blog explores the beautiful tapestry of care and parenting practices in the local community, highlighting the values, traditions, and collective efforts that shape the upbringing of children in Ethiopia.
              In Ethiopia, parenting goes beyond the immediate family unit. The community plays an integral role in the care and upbringing of children. Neighbors, extended family members, and close friends form a network of support, sharing wisdom, advice, and resources. This collective approach creates a sense of belonging and ensures that children grow up surrounded by love, guidance, and multiple role models.
              In Ethiopia, emotional well-being holds significant importance in parenting. Parents and caregivers actively listen to their children, creating an atmosphere of trust and open communication. Emotional expression is encouraged, and children are taught empathy, compassion, and resilience. This emphasis on emotional nurturing helps children develop healthy relationships, build self-confidence, and navigate life's challenges.`}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
