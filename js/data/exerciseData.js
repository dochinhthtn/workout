import { createExercise } from "../models/exercises.js";

let exerciseData = [
    {
        "name": "Naja haje",
        "muscles": [
            "Abs",
            "Leg"
        ],
        "instruction": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "difficulty": "Hard",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        "calories": 707,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-10-02",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Pteropus rufus",
        "muscles": [
            "Neck",
            "Shoulder"
        ],
        "instruction": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "difficulty": "Normal",
        "description": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "calories": 890,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-09-10",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Toxostoma curvirostre",
        "muscles": [
            "Arm",
            "Shoulder"
        ],
        "instruction": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "difficulty": "Normal",
        "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "calories": 798,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-06-26",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 5
    }, {
        "name": "unavailable",
        "muscles": [
            "Abs",
            "Butt"
        ],
        "instruction": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
        "difficulty": "Easy",
        "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "calories": 723,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-09-06",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 5
    }, {
        "name": "Hymenolaimus malacorhynchus",
        "muscles": [
            "Neck",
            "Chest"
        ],
        "instruction": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "difficulty": "Hard",
        "description": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "calories": 546,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-08-12",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 3
    }, {
        "name": "Snycerus caffer",
        "muscles": [
            "Leg",
            "Neck"
        ],
        "instruction": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "difficulty": "Easy",
        "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        "calories": 599,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-02-22",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 3
    }, {
        "name": "Libellula quadrimaculata",
        "muscles": [
            "Shoulder",
            "Chest"
        ],
        "instruction": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
        "difficulty": "Hard",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
        "calories": 432,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-02-13",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Varanus sp.",
        "muscles": [
            "Shoulder",
            "Butt"
        ],
        "instruction": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "difficulty": "Normal",
        "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "calories": 770,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-05-08",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Tachyglossus aculeatus",
        "muscles": [
            "Chest",
            "Neck"
        ],
        "instruction": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "difficulty": "Easy",
        "description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "calories": 584,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2021-12-15",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 3
    }, {
        "name": "Propithecus verreauxi",
        "muscles": [
            "Arm",
            "Butt"
        ],
        "instruction": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "difficulty": "Normal",
        "description": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "calories": 592,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-02-23",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 3
    }, {
        "name": "Acrobates pygmaeus",
        "muscles": [
            "Arm",
            "Abs"
        ],
        "instruction": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
        "difficulty": "Hard",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "calories": 328,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-10-16",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Scolopax minor",
        "muscles": [
            "Leg",
            "Abs"
        ],
        "instruction": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "difficulty": "Hard",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "calories": 784,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-08-28",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 3
    }, {
        "name": "Axis axis",
        "muscles": [
            "Leg",
            "Neck"
        ],
        "instruction": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "difficulty": "Hard",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "calories": 690,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-03-30",
        "images": [

        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Columba palumbus",
        "muscles": [
            "Shoulder",
            "Arm"
        ],
        "instruction": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "difficulty": "Easy",
        "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "calories": 712,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-09-19",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Cygnus buccinator",
        "muscles": [
            "Neck",
            "Arm"
        ],
        "instruction": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
        "difficulty": "Hard",
        "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        "calories": 710,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2021-11-29",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Vulpes vulpes",
        "muscles": [
            "Butt",
            "Leg"
        ],
        "instruction": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "difficulty": "Normal",
        "description": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        "calories": 213,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-05-13",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "unavailable",
        "muscles": [
            "Arm",
            "Shoulder"
        ],
        "instruction": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
        "difficulty": "Hard",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
        "calories": 416,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2021-12-29",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 5
    }, {
        "name": "Kobus defassa",
        "muscles": [
            "Abs",
            "Chest"
        ],
        "instruction": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        "difficulty": "Normal",
        "description": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        "calories": 323,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-03-09",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 3
    }, {
        "name": "Aonyx cinerea",
        "muscles": [
            "Neck",
            "Shoulder"
        ],
        "instruction": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "difficulty": "Hard",
        "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "calories": 464,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-01-13",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 5
    }, {
        "name": "Haliaetus leucogaster",
        "muscles": [
            "Shoulder",
            "Arm"
        ],
        "instruction": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "difficulty": "Hard",
        "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "calories": 229,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-04-22",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Macropus parryi",
        "muscles": [
            "Shoulder",
            "Neck"
        ],
        "instruction": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
        "difficulty": "Easy",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "calories": 306,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-07-25",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 5
    }, {
        "name": "unavailable",
        "muscles": [
            "Shoulder",
            "Leg"
        ],
        "instruction": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "difficulty": "Hard",
        "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
        "calories": 926,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-06-15",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Upupa epops",
        "muscles": [
            "Arm",
            "Shoulder"
        ],
        "instruction": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "difficulty": "Easy",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        "calories": 444,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2021-12-30",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Papio cynocephalus",
        "muscles": [
            "Abs",
            "Butt"
        ],
        "instruction": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
        "difficulty": "Easy",
        "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "calories": 671,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2021-12-04",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Tamiasciurus hudsonicus",
        "muscles": [
            "Abs",
            "Neck"
        ],
        "instruction": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "difficulty": "Easy",
        "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        "calories": 670,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-02-03",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Eolophus roseicapillus",
        "muscles": [
            "Neck",
            "Butt"
        ],
        "instruction": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "difficulty": "Hard",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        "calories": 604,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-10-29",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Bubalornis niger",
        "muscles": [
            "Arm",
            "Leg"
        ],
        "instruction": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "difficulty": "Hard",
        "description": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
        "calories": 823,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-07-16",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 5
    }, {
        "name": "Centrocercus urophasianus",
        "muscles": [
            "Leg",
            "Neck"
        ],
        "instruction": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "difficulty": "Normal",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "calories": 700,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-05-17",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Eolophus roseicapillus",
        "muscles": [
            "Arm",
            "Neck"
        ],
        "instruction": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        "difficulty": "Hard",
        "description": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "calories": 423,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-11-12",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Ammospermophilus nelsoni",
        "muscles": [
            "Chest",
            "Neck"
        ],
        "instruction": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "difficulty": "Normal",
        "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "calories": 362,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-04-23",
        "images": [

        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 3
    }, {
        "name": "Pteronura brasiliensis",
        "muscles": [
            "Butt",
            "Arm"
        ],
        "instruction": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "difficulty": "Easy",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "calories": 969,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-05-12",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Porphyrio porphyrio",
        "muscles": [
            "Butt",
            "Chest"
        ],
        "instruction": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "difficulty": "Hard",
        "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "calories": 101,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-09-17",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 3
    }, {
        "name": "Gyps fulvus",
        "muscles": [
            "Butt",
            "Neck"
        ],
        "instruction": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "difficulty": "Hard",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "calories": 257,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-02-02",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Plegadis falcinellus",
        "muscles": [
            "Leg",
            "Arm"
        ],
        "instruction": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
        "difficulty": "Hard",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "calories": 156,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-08-10",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Pycnonotus nigricans",
        "muscles": [
            "Arm",
            "Abs"
        ],
        "instruction": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
        "difficulty": "Normal",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "calories": 365,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-08-31",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Acrantophis madagascariensis",
        "muscles": [
            "Butt",
            "Chest"
        ],
        "instruction": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        "difficulty": "Hard",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "calories": 424,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-11-10",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Anser anser",
        "muscles": [
            "Arm",
            "Shoulder"
        ],
        "instruction": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        "difficulty": "Hard",
        "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "calories": 623,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-05-14",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 5
    }, {
        "name": "Colaptes campestroides",
        "muscles": [
            "Neck",
            "Shoulder"
        ],
        "instruction": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "difficulty": "Normal",
        "description": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "calories": 714,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-11-16",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Larus dominicanus",
        "muscles": [
            "Shoulder",
            "Arm"
        ],
        "instruction": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "difficulty": "Hard",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
        "calories": 694,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "created_at": "2022-05-23",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Falco mexicanus",
        "muscles": [
            "Abs",
            "Chest"
        ],
        "instruction": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
        "difficulty": "Easy",
        "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "calories": 908,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-11-10",
        "images": [

        ],
        "equipments": [
            "Dumbbell"
        ],
        "avg_rating": 4
    }, {
        "name": "Papio cynocephalus",
        "muscles": [
            "Neck",
            "Butt"
        ],
        "instruction": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "difficulty": "Easy",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
        "calories": 648,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-05-17",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 3
    }, {
        "name": "Lutra canadensis",
        "muscles": [
            "Leg",
            "Chest"
        ],
        "instruction": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
        "difficulty": "Easy",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "calories": 825,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-10-07",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Otaria flavescens",
        "muscles": [
            "Butt",
            "Chest"
        ],
        "instruction": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        "difficulty": "Easy",
        "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "calories": 868,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-09-23",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 3
    }, {
        "name": "Gazella granti",
        "muscles": [
            "Abs",
            "Neck"
        ],
        "instruction": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
        "difficulty": "Hard",
        "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "calories": 694,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-04-15",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 5
    }, {
        "name": "Laniarius ferrugineus",
        "muscles": [
            "Chest",
            "Shoulder"
        ],
        "instruction": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "difficulty": "Easy",
        "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "calories": 581,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "created_at": "2022-04-27",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 5
    }, {
        "name": "Petaurus norfolcensis",
        "muscles": [
            "Leg",
            "Arm"
        ],
        "instruction": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        "difficulty": "Easy",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        "calories": 204,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-08-01",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Bos taurus",
        "muscles": [
            "Butt",
            "Chest"
        ],
        "instruction": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "difficulty": "Hard",
        "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "calories": 411,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-03-30",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 4
    }, {
        "name": "Dasyurus maculatus",
        "muscles": [
            "Shoulder",
            "Neck"
        ],
        "instruction": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "difficulty": "Normal",
        "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "calories": 799,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "created_at": "2022-03-28",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "equipments": [
            "Chair"
        ],
        "avg_rating": 4
    }, {
        "name": "Cercopithecus aethiops",
        "muscles": [
            "Arm",
            "Leg"
        ],
        "instruction": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "difficulty": "Easy",
        "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        "calories": 885,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-08-03",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "equipments": [

        ],
        "avg_rating": 3
    }, {
        "name": "Neotis denhami",
        "muscles": [
            "Butt",
            "Arm"
        ],
        "instruction": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "difficulty": "Hard",
        "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "calories": 756,
        "video": "https://youtu.be/kIaqbrWBexY",
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "created_at": "2022-03-30",
        "images": [

        ],
        "equipments": [

        ],
        "avg_rating": 5
    }
];

/**
 * Thêm exercise vào collection exercises
 */
function generateExerciseData() {
    for (let i = 0; i < exerciseData.length; i++) {
        let exercise = exerciseData[i];
        createExercise(exercise)
    }
}

export { exerciseData, generateExerciseData };