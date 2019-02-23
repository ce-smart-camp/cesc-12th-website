<template>
  <v-container grid-list-md10>
    <v-layout column align-center pl-5 pr-5>
      <v-flex pb-4>
        <span class="header">FAQs</span>
      </v-flex>
      <v-expansion-panel popout>
        <v-expansion-panel-content v-for="(message, i) in messages" :key="i" hide-actions>
          <v-layout slot="header" align-center row spacer>
            <v-flex xs4 sm2 md1>
              <v-avatar slot="activator" size="36px">
                <img src="../../assets/icons/A.png" alt="Avatar" style=" transform: scaleX(-1)">
              </v-avatar>
            </v-flex>

            <v-flex warp sm2 xs8 md10>
              <strong v-html="message.title" class="pageTitle"></strong>
            </v-flex>
          </v-layout>

          <v-card>
            <v-divider></v-divider>
            <v-card-text v-text="message.answer" class="pageAnswer"></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "newFAQs",
  data() {
    return {
      messages: [
        {
          id: "1",
          title: "ค่ายนี้สอนอะไร",
          answer:
            "ค่ายนี้น้องๆจะได้เรียนตั้งแต่ Basic Logic เช่น สอนการคิดแบบโปรแกรม Flowchart เป็นต้น พื้นฐานการเขียนโปรแกรม การต่อวงจรไฟฟ้า จนสามารถประยุกต์กับ “IoT” ในคอนเซปของ Smart Home ได้"
        },
        {
          id: "2",
          title: "จำเป็นต้องมีพื้นฐานไหม ",
          answer:
            "น้องๆไม่จำเป็นต้องมีพื้นฐานมาก่อน ขอเพียงน้องๆมีความสนใจ, มีความพร้อมที่จะเรียนรู้จริงๆ และมีพื้นฐานการใช้คอมพิวเตอร์เบื้องต้นอยู่บ้างเล็กน้อย"
        },
        {
          id: "3",
          title: "ต้องเตรียมอะไรมาบ้าง ",
          answer:
            "ชุดนักเรียนสำหรับพิธีเปิด-ปิด เตรียมยาและของใช้ส่วนตัว"
        },
        {
          id: "4",
          title: "รับสมัครวันไหน รับใครบ้าง รับกี่คน",
          answer:
            " 20 มีนาคม - 10 เมษายน รับนักเรียนมัธยมปลายทุกแผนการเรียนหรือเทียบเท่า จำนวน 40 คน"
        },
        {
          id: "5",
          title: "หลังจากหมดวันรับสมัครแล้วยังแก้ไขคำตอบได้หรือเปล่า",
          answer:
            "10 เม.ย. 62 - 20 เม.ย. 62 ปิดรับสมัครแต่น้อง ๆ คนไหนสมัครแล้ว ยังสามารถแก้ไขคำตอบได้"
        },
        {
          id: "6",
          title: "หลักฐานที่ใช้ในการสมัคร",
          answer:
            "1. สำเนาบัตรประชาชน หรือสำเนาบัตรนักเรียน 2. ใบ ปพ.1 หรือ ปพ.7 3. ใบรับรองจากผู้ปกครอง 4. ใบสมัคร"
        },
        {
          id: "7",
          title: "ค่ายนี้มีค่าสมัครและค่าเข้าค่ายไหม",
          answer:
            "ฟรีตลอดค่าย แต่เมื่อสมัครติดแล้วจะมีค่ามัดจำ 300 บาทและสามารถรับคืนได้ในวันสุดท้ายของค่าย"
        },
        {
          id: "8",
          title: "สถานที่ค่ายจัดที่ไหน",
          answer:
            "อาคารปฏิบัติการวิศวกรรมศาสตร์ 2 ตรงข้ามฝั่งคณะวิศวกรรมศาสตร์ "
        },
        {
          id: "9",
          title: "ระยะเวลาในการจัดค่าย",
          answer: "จัดวันที่ 31 พ.ค. 62 - 5 มิ.ย. 62 (ค่ายพักค้างคืน 6วัน 5คืน)"
        },
        {
          id: "10",
          title: "วันค่ายชนกับช่วงเปิดเทอม ต้องขาดเรียนไหม",
          answer:
            " ต้องขาดเรียน แต่ทางเราจะมีเอกสารรับรองที่ใช้ประกอบใบลาเพื่อส่งให้ทางโรงเรียน"
        },
        {
          id: "11",
          title: "การอาบน้ำ อาหาร และที่นอนในค่ายเป็นอย่างไร",
          answer:
            "หากมีการอาบน้ำรวมจะแจ้งให้ทราบภายหลัง มีอาหารครบทั้ง 3 มื้อ และมีที่นอนแยกชายหญิงพร้อมพี่ๆ คอยดูแล ซึ่งอยู่ในภาควิชาวิศวกรรมคอมพิวเตอร์"
        },
        {
          id: "12",
          title: "บรรยากาศการเรียนการสอนของค่ายเป็นอย่างไร",
          answer:
            "ค่ายนี้น้องๆ จะได้ลงมือปฏิบัติจริงอย่างเต็มที่ พร้อมผ่อนคลายด้วยกิจกรรมและสันทนาการที่สนุกสนาน จะได้ทั้งเพื่อน ความรู้ และความสนุกกลับไป (โดย Staff รุ่นพี่จากชั้นปีต่างๆและอาจารย์)"
        }
      ]
    };
  }
};
</script>

<style scoped>
.pageTitle {
  font-family: "Kanit", sans-serif;
  font-size: 18px;
}

.pageAnswer {
  font-family: "Kanit", sans-serif;
  font-size: 16px;
}

.header {
  font-family: "Orbitron", sans-serif;
  font-size: 36px;
}
</style>


