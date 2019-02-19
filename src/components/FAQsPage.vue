<template>
  <v-container>
    <v-layout>
      <v-flex>
        <center>
          <h1 class="faq">FAQs</h1>
        </center>
        <v-flex v-for="blog in blogs" :key="blog" id="content">
          <v-card-title class="question" primary-title>{{blog.question}}</v-card-title>
          <v-card>
            <v-card-text class="answer">{{blog.answer}}</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FAQsPage",
  data() {
    return {
      blogs: [
        {
          id: "1",
          question: "ค่ายนี้สอนอะไร",
          answer:
            "ค่ายนี้น้องๆจะได้เรียนตั้งแต่ Basic Logic เช่น สอนการคิดแบบโปรแกรม Flowchart เป็นต้น พื้นฐานการเขียนโปรแกรม การต่อวงจรไฟฟ้า จนสามารถประยุกต์กับ “IoT” ในคอนเซปของ Smart Home ได้"
        },
        {
          id: "2",
          question: "จำเป็นต้องมีพื้นฐานไหม ",
          answer:
            "น้องๆไม่จำเป็นต้องมีพื้นฐานมาก่อน ขอเพียงน้องๆมีความสนใจ, มีความพร้อมที่จะเรียนรู้จริงๆ และมีพื้นฐานการใช้คอมพิวเตอร์เบื้องต้นอยู่บ้างเล็กน้อย"
        },
        {
          id: "3",
          question: "ต้องเตรียมอะไรมาบ้าง ",
          answer:
            "ชุดนักเรียนสำหรับพิธีเปิด-ปิด เตรียมยาและของใช้ส่วนตัว ( อย่ายืมของใช้ส่วนตัว)"
        },
        {
          id: "4",
          question: "รับสมัครวันไหน รับใครบ้าง รับกี่คน",
          answer:
            " 20 มี.ค. 62 - 20 เม.ย. 62 รับนักเรียนมัธยมปลายทุกแผนการเรียนหรือเทียบเท่า จำนวน 40คน"
        },
        {
          id: "5",
          question: "หลักฐานที่ใช้ในการสมัคร",
          answer:
            "1. สำเนาบัตรประชาชน หรือสำเนาบัตรนักเรียน 2. ใบ ปพ.1 หรือ ปพ.7 3. ใบรับรองจากผู้ปกครอง 4. ใบสมัคร"
        },
        {
          id: "6",
          question: "ค่ายนี้มีค่าสมัครและค่าเข้าค่ายไหม",
          answer:
            "ฟรีตลอดค่าย แต่เมื่อสมัครติดแล้วจะมีค่ามัดจำ 300 บาทและสามารถรับคืนได้ในวันสุดท้ายของค่าย"
        },
        {
          id: "7",
          question: "สถานที่ค่ายจัดที่ไหน",
          answer:
            "อาคารปฏิบัติการวิศวกรรมศาสตร์ 2 ตรงข้ามฝั่งคณะวิศวกรรมศาสตร์ "
        },
        {
          id: "8",
          question: "ระยะเวลาในการจัดค่าย",
          answer: "จัดวันที่ 31 พ.ค. 62 - 5 มิ.ย. 62 (ค่ายพักค้างคืน 6วัน 5คืน)"
        },
        {
          id: "9",
          question: "วันค่ายชนกับช่วงเปิดเทอม ต้องขาดเรียนไหม",
          answer:
            " ต้องขาดเรียน แต่ทางเราจะมีเอกสารรับรองที่ใช้ประกอบใบลาเพื่อส่งให้ทางโรงเรียน"
        },
        {
          id: "10",
          question: "การอาบน้ำ อาหาร และที่นอนในค่ายเป็นอย่างไร",
          answer:
            "เป็นการอาบน้ำรวม????  มีอาหารครบทั้ง 3 มื้อ และมีที่นอนแยกชายหญิงพร้อมพี่ๆ คอยดูแล ซึ่งอยู่ในภาควิชาวิศวกรรมคอมพิวเตอร์"
        },
        {
          id: "11",
          question: "บรรยากาศการเรียนการสอนของค่ายเป็นอย่างไร",
          answer:
            "ค่ายนี้น้องๆ จะได้ลงมือปฏิบัติจริงอย่างเต็มที่ พร้อมผ่อนคลายด้วยกิจกรรมและสันทนาการที่สนุกสนาน จะได้ทั้งเพื่อน ความรู้ และความสนุกกลับไป (โดยStaffรุ่นพี่จากชั้นปีต่างๆและอาจารย์)"
        }
      ],
      search: ""
    };
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.question.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
.faq {
  font-family: "Gotham-Black", sans-serif;
  font-size: 36px;
  margin-bottom: 10px;
}
.answer {
  font-family: "FC Active Regular", serif;
  font-size: 18px;
}
.question {
  font-family: "FC Active Regular", serif;
  font-size: 24px;
}
</style>


