import Link from 'next/link';
import { motion } from 'framer-motion'; 
import styles from '../app/Home.module.css';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <motion.div className={styles.container} initial="hidden" animate="visible" variants={variants}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <h1>كيف يتعامل الله مع مشاعرك</h1>
        </div>
        <div className={styles.buttons}>
        <Link href="/page?page=page1&video=dQw4w9WgXcQ">
        <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الذنب
            </motion.button>
          </Link>
          <Link href="/page?page=page2&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الاكتئاب
            </motion.button>
          </Link>
          <Link href="/page?page=page3&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               القلق
            </motion.button>
          </Link>
          <Link href="/page?page=page4&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الخوف
            </motion.button>
          </Link>
          <Link href="/page?page=page5&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الضعف
            </motion.button>
          </Link>
          <Link href="/page?page=page6&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              بعدم الامان
            </motion.button>
          </Link>
          <Link href="/page?page=page7&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              الاضطهاد
            </motion.button>
          </Link>
          <Link href="/page?page=page8&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              الالم
            </motion.button>
          </Link>
          <Link href="/page?page=page9&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              الحزن
            </motion.button>
          </Link>
          <Link href="/page?page=page10&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
             الغضب
            </motion.button>
          </Link>
          <Link href="/page?page=page11&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              الحقد
            </motion.button>
          </Link>
          <Link href="/page?page=page12&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              الاحتياج
            </motion.button>
          </Link>
          <Link href="/page?page=page13&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
             الوحدة
            </motion.button>
          </Link>
          <Link href="/page?page=page14&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               بخيبة الامل
            </motion.button>
          </Link>
          <Link href="/page?page=page15&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الفشل
            </motion.button>
          </Link>
          <Link href="/page?page=page16&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الخطر
            </motion.button>
          </Link>
          <Link href="/page?page=page17&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               الغيرة
            </motion.button>
          </Link>
          <Link href="/page?page=page18&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              التعب 
            </motion.button>
          </Link>
          <Link href="/page?page=page19&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               العجز
            </motion.button>
          </Link>
          <Link href="/page?page=page20&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               النبذ
            </motion.button>
          </Link>
          <Link href="/page?page=page21&video=dQw4w9WgXcQ">
            <motion.button className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
               التدنى
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
