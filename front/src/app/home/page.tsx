'use client';
import { useEffect, useState } from "react";
// import FlashCardActionControls from "@/components/flashCardActionControls";
// import FlipCard from "@/components/flipCard";
// import { FlipCardInterface } from "@/types/flipCard";
import Spreadsheet, { Matrix } from "react-spreadsheet";


export default function Home() {
  // const flipCardList: FlipCardInterface[] = [
  //   {
  //     vocabulary: "serendipity",
  //     pronunciation: "ˌserənˈdipədē",
  //     definition: "The occurrence of events by chance in a happy or beneficial way.",
  //     example: "They found each other by pure serendipity."
  //   },
  //   {
  //     vocabulary: "ephemeral",
  //     pronunciation: "əˈfem(ə)rəl",
  //     definition: "Lasting for a very short time.",
  //     example: "Fame in the digital age can be ephemeral."
  //   },
  //   {
  //     vocabulary: "quintessential",
  //     pronunciation: "ˌkwin(t)əˈsen(t)SHəl",
  //     definition: "Representing the most perfect or typical example of a quality or class.",
  //     example: "He was the quintessential Renaissance man."
  //   },
  //   {
  //     vocabulary: "ubiquitous",
  //     pronunciation: "yo͞oˈbikwədəs",
  //     definition: "Present, appearing, or found everywhere.",
  //     example: "Smartphones have become ubiquitous in modern society."
  //   },
  //   {
  //     vocabulary: "alacrity",
  //     pronunciation: "əˈlakrədē",
  //     definition: "Brisk and cheerful readiness.",
  //     example: "She accepted the invitation with alacrity."
  //   }
  // ];

  const [data, setData] = useState<Matrix<{
    value: string;
  }>>([
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
  ]);
  const columnLabels = ["Từ mới", "Định nghĩa", 'Ví dụ', 'Phiên âm'];
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <>
      <Spreadsheet data={data} columnLabels={columnLabels} onChange={(d) => {
        setData(d)
      }} />
      <div className="flex gap-2 flex-wrap">
      {
    flipCardList.map((item, index) => {
      return <FlipCard key={index} definition={item.definition} pronunciation={item.pronunciation} example={item.example} vocabulary={item.vocabulary}/> 
    })
  }
  </div>
  <FlashCardActionControls />
    </>
  );
}
