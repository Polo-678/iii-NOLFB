import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Course1() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.courseTitle}>📘 Course 1: Filipino Proverbs</Text>
          <Text style={styles.subTitle}>Understanding Salawikain and Our Cultural Wisdom</Text>
        </View>

        <View style={styles.contentCard}>
          <Text style={styles.sectionTitle}>💬 Filipino Proverbs & Cultural Wisdom</Text>
          <ScrollView style={styles.proverbScroll} nestedScrollEnabled={true}>
            <Text style={styles.contentText}>
            👵 Damiana L. Eugenio, known as the "Mother of Philippine Folklore," collected amazing proverbs from all over the Philippines.
    {"\n\n"}✨ These proverbs, or **salawikain**, are short sayings packed with wisdom! They teach life lessons, give advice, and show our values — all in a fun and poetic way.
    {"\n\n"}🧠 Eugenio grouped them into six awesome categories:
    {"\n\n"}🔹 **1. Attitudes About Life**
    {"\n"}• Walang ligaya sa lupa na di dinilig ng luha. – *There is no earthly joy that is not watered with tears.* (Tagalog)
    {"\n"}• Say liket ban-bantayey ermen. – *Joy is always guarded by sorrow.* (Pangasinan)
    {"\n"}• Ang kapalaran ko di ko man hanapin, dudulog lalapit kung talagang akin. – *The good fortune meant for me will find me.* (Tagalog)

    {"\n\n"}🔹 **2. Ethical Proverbs**
    {"\n"}• Walang utang na di pinagbayaran. – *No debt remains unpaid.* (Tagalog)
    {"\n"}• Dai mo pagpaagahan an magigibo mo ngonyan. – *Don’t put off for tomorrow what you can do today.* (Bikol)
    {"\n"}• Ayau mo in kahui pila’a ha kawa’an mo bunga. – *Don’t cut the tree to get the fruit.* (Tausug)

    {"\n\n"}🔹 **3. System of Values**
    {"\n"}• Ti nasadot a baro cas carne a nadangro. – *A lazy youth is like rotten meat.* (Ilokano)
    {"\n"}• Ang mga tulo singgot sa taong mangguibuhaton paga bayran gayud sa guihapon. – *Every drop of sweat will be rewarded.* (Boholano)
    {"\n"}• Isa ka tuig nga tiponon, isa ka takna wagwagon. – *A year’s savings can be lost in a moment.* (Hiligaynon)

    {"\n\n"}🔹 **4. Truths About Life**
    {"\n"}• Huli man at magaling, naihahabol din. – *A good thing is never too late.* (Tagalog)
    {"\n"}• Ti saan a matimtemec, nauyong no macaunget. – *Quiet people have deep anger when provoked.* (Ilokano)
    {"\n"}• Ing mayap a babai, maiguit ya karing rubi. – *A good woman is worth more than rubies.* (Pampango)

    {"\n\n"}🔹 **5. Funny & Witty**
    {"\n"}• Ang gugma sang tigulang daw igui nga nagakamang. – *Old man's love is like a crawling snail.* (Hiligaynon)
    {"\n"}• Ako kanhi cabalyero nga wala’y kabilinggan... – *Marriage turned me into a thin man!* (Cebuano)
    {"\n"}• Kay tagal nanindahan, kabili-bili’y balindang. – *After long shopping, made a bad buy.* (Tagalog)

    {"\n\n"}🔹 **6. Miscellaneous Sayings**
    {"\n"}• Ing matudtud a pemangca e na balu lebasa’ ng sapa. – *The sleeping boatman doesn't know the rivers he crossed.* (Pampango)
    {"\n"}• Mapipia nu sumavat ka a maysaosaod... – *Better to weave a net than watch fish.* (Ivatan)
    {"\n"}• Dica agcapcapoy no bassit ti inapoy... – *Don’t be lazy or shy when food is scarce.* (Ilokano)

    {"\n\n"}📜 Our proverbs are more than just words — they’re treasures of our culture! Every time we use them, write them, or even act them out, we help preserve them for future generations. Let’s be proud and pass them on! 💖
            </Text>
          </ScrollView>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🎯 Activities & Mini Games</Text>
        </View>

        <Link href="/courses/course1/posttest1" replace asChild>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>🧪 Quiz Time! Take the Post-Test</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/courses/course1/quizgametest1" replace asChild>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>🎮 Activity time</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(main)/Homescreenstudents" replace asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>🏠 Back to Home</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  proverbScroll: {
    maxHeight: 320, 
    marginTop: 10,
  },
  
  header: {
    backgroundColor: "#1E3A8A",
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 15,
    color: "#CBD5E1",
    textAlign: "center",
  },
  contentCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contentText: {
    fontSize: 15,
    color: "#1F2937",
    lineHeight: 24,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B",
  },
  actionCard: {
    backgroundColor: "#E0F2FE",
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0C4A6E",
  },
  backButton: {
    backgroundColor: "#D1D5DB",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
});
