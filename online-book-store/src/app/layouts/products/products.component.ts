import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  book_category_enum = ["Autobography","Inspirational","Fiction"]

  bookList = [
    {
      book_id : 1,
      book_title:"Wings of Fire: An Autobiography of Abdul Kalam",
      authors : ["A.P.J Abdul Kalam"],
      book_img :"product1.jpg",
      mrp_price :395,
      store_price: 326,
      ratings:5,
      inStock:true, 
      kindle_edition: false,
      description : "If you want to leave your footprints in the sands of time, do not drag your feet. These are one of the most enduring lines that still lay etched in my memory.",
      book_details: {
        paperback:"180 pges",
        publisher: "Universities Press; 1st edition (1999)",
        language: "English",
        isbn_10: "9788173711466",
        isbn_13: "8173711466",
        category: "1",
        delivery: "2020-07-07"
      },
      author_details: "Arun Tiwari rose to fame as an author with his book Wings of Fire, which he co-authored with Dr. A.P.J. Abdul Kalam. He's a missile scientist who worked under the guidance of Kalam. Tiwari contributed to the design of the missiles, Akash and Trishul and is the first Indian who designed a titanium bottle to power missiles"
    },
    {
      book_id : 2,
      book_title:"The Dhoni Touch",
      authors : ["Bharat Sundaresan"],
      book_img :"product2.jpg",
      mrp_price :299,
      store_price: 255,
      ratings:5,
      inStock:true, 
      kindle_edition: true,
      description : "For over a decade, Mahendra Singh Dhoni has captivated the world of cricket and over a billion Indians with his incredible ingenuity as captain, wicketkeeper and batsman. Bharat Sundaresan tracks down the cricketer's closest friends in Ranchi and artfully presents the different shades of Dhoni-the Ranchi boy, the fauji, the diplomat, Chennai's beloved Thala, the wicketkeeping Pythagoras-and lays bare the man underneath",
      book_details: {
        paperback:"256 pges",
        publisher: "Penguin eBury Press (13 July 2018)",
        language: "English",
        isbn_10: "9780143440062",
        isbn_13: "978-0143440062",
        category: "2",
        delivery: "2020-07-06"
      },
      author_details: "Bharat Sundaresan lives for West Indian cricket and pro wrestling, and is a raconteur of all things and metal music. He has covered cricket for the Indian Express for the last ten years-seven of which he spent tracking down the Jamaican cricketer, Patrick Patterson."
    },
    {
      book_id : 3,
      book_title:"The Monk Who Sold His Ferrari",
      authors : ["Robin Sharma"],
      book_img :"product3.jpg",
      mrp_price :225,
      store_price: 170,
      ratings:2,
      inStock:false, 
      kindle_edition: true,
      description : "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer’s life.",
      book_details: {
        paperback:"198 pges",
        publisher: "Jaico Publishing House; First edition (25 September 2003)",
        language: "English",
        isbn_10: "817992162X",
        isbn_13: "978-8179921623",
        category: "3",
        delivery: "2020-07-10"
      },
      author_details: "Robin Sharma, who is the author of The Monk Who Sold His Ferrari, is one of the best-known experts in leadership. This book and a second book titled The Greatness Guide by Robin Sharma have been bestsellers, the world over and have been published in seventy languages as well."
    }

  ];

}
