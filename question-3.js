/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n)


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n)


*/

/* 
Which function is more efficient and why?
Answer: findProductPrice. เพราะใช้เวลาในการหาต่ำกว่า โดยการทำงาน จะเป็นการแบบตัดออกทีละครึ่งจนกว่าจะเจอ หากมีข้อมูล 1000000 จะเป็น 1000000 500000 250000 .... จะใช้เวลาค้นหาน้อยกว่า จึงมีประสิทธิภาพมากกว่า
แต่ findStudentById จะทำงานโดยการไล่ตรวจสอบตั้งแต่ตัวแรก ไปจนกว่าจะเจอ หากมีข้อมูล 1000000 ตัว แล้วตัวที่ต้องการอยู่ที่ 999999 findStudentById ก็จะทำงาน 999999 ครั่ง


*/
