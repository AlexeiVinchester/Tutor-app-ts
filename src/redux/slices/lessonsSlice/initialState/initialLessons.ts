import { ILesson } from "../../../../share/interfaces/lesson.interface";

function createLesson(id: number, name: string, price: number, date: string, paidStatus: boolean) {
    return {id, name, price, date, paidStatus};
};

export const startLessons: ILesson[] = [
    createLesson(1, 'Anton and Ilya', 30, '2024-04-01', true),
    createLesson(2, 'Diana', 25, '2024-04-01', true),
    createLesson(3, 'Saveliy', 25, '2024-04-02', true),
    createLesson(4, 'Tihon', 40, '2024-04-02', true),
    createLesson(5, 'Bogdana', 25, '2024-04-02', true),
    createLesson(6, 'Diana', 25, '2024-04-03', true),
    createLesson(7, 'Darya', 25, '2024-04-04', true),
    createLesson(8, 'Kirill Konoplitskiy', 25, '2024-04-04', true),
    createLesson(9, 'Diana', 25, '2024-04-04', true),
    createLesson(10, 'Bogdana', 25, '2024-04-04', true),
    createLesson(11, 'Tihon', 40, '2024-04-05', true),
    createLesson(12, 'Kirill Begun', 25, '2024-04-05', true),
    createLesson(13, 'Anton and Ilya', 30, '2024-04-08', true),
    createLesson(14, 'Diana', 25, '2024-04-08', true),
    createLesson(15, 'Saveliy', 25, '2024-04-09', true),
    createLesson(16, 'Tihon', 40, '2024-04-09', true),
    createLesson(17, 'Vasilisa', 25, '2024-04-09', true),
    createLesson(18, 'Kirill Konoplitskiy', 25, '2024-04-10', true),
    createLesson(19, 'Vasilisa', 25, '2024-04-10', true),
    createLesson(20, 'Diana', 25, '2024-04-10', true),
    createLesson(21, 'Darya', 25, '2024-04-11', true),
    createLesson(22, 'Diana', 25, '2024-04-11', true),
    createLesson(23, 'Kirill Begun', 25, '2024-04-12', true),
    createLesson(24, 'Anton and Ilya', 30, '2024-04-15', true),
    createLesson(25, 'Diana', 25, '2024-04-15', true),
    createLesson(26, 'Tihon', 40, '2024-04-16', true),
    createLesson(27, 'Saveliy', 25, '2024-04-16', true),
    createLesson(28, 'Vasilisa', 25, '2024-04-16', true),
    createLesson(29, 'Bogdana', 25, '2024-04-16', true),
    createLesson(30, 'Kirill Konoplitskiy', 25, '2024-04-17', true),
    createLesson(31, 'Kirill Begun', 25, '2024-04-17', true),
    createLesson(32, 'Vasilisa', 25, '2024-04-17', true),
    createLesson(33, 'Diana', 25, '2024-04-17', true),
    createLesson(34, 'Darya', 25, '2024-04-18', true),
    createLesson(35, 'Diana', 25, '2024-04-18', true),
    createLesson(36, 'Bogdana', 25, '2024-04-18', true),
    createLesson(37, 'Tihon', 40, '2024-04-19', true),
    createLesson(38, 'Anton and Ilya', 30, '2024-04-22', true),
    createLesson(39, 'Tihon', 40, '2024-04-23', true),
    createLesson(40, 'Vasilisa', 25, '2024-04-23', true),
    createLesson(41, 'Bogdana', 25, '2024-04-23', true),
    createLesson(42, 'Kirill Konoplitskiy', 25, '2024-04-24', true),
    createLesson(43, 'Kirill Begun', 25, '2024-04-24', true),
    createLesson(44, 'Darya', 25, '2024-04-25', true),
    createLesson(45, 'Vasilisa', 25, '2024-04-25', true),
    createLesson(46, 'Vasilisa', 25, '2024-04-28', true),
    createLesson(47, 'Anton and Ilya', 30, '2024-04-29', true),
    createLesson(48, 'Diana', 25, '2024-04-29', true),
    createLesson(49, 'Saveliy', 25, '2024-04-30', true),
    createLesson(50, 'Vasilisa', 25, '2024-04-30', true),
    createLesson(51, 'Bogdana', 25, '2024-04-30', true),
    createLesson(52, 'Diana', 25, '2024-04-30', true),
    createLesson(53, 'Saveliy', 20, '2023-12-08', true),
    createLesson(54, 'Kirill Begun', 20, '2023-12-08', true),
    createLesson(55, 'Diana', 20, '2023-12-11', true),
    createLesson(56, 'Bogdana', 20, '2023-12-11', true),
    createLesson(57, 'Saveliy', 20, '2023-12-12', true),
    createLesson(58, 'Anton and Ilya', 30, '2023-12-13', true),
    createLesson(59, 'Bogdana', 20, '2023-12-13', true),
    createLesson(60, 'Darya', 25, '2023-12-14', true),
    createLesson(61, 'Diana', 20, '2023-12-14', true),
    createLesson(62, 'Saveliy', 20, '2023-12-15', true),
    createLesson(63, 'Kirill Begun', 20, '2023-12-15', true),
    createLesson(64, 'Diana',  20, '2023-12-15', true),
    createLesson(65, 'Anton and Ilya', 30, '2023-12-18', true),
    createLesson(66, 'Diana', 20, '2023-12-18', true),
    createLesson(67, 'Saveliy', 20, '2023-12-19', true),
    createLesson(68, 'Diana', 20, '2023-12-19', true),
    createLesson(69, 'Bogdana', 20, '2023-12-19', true),
    createLesson(70, 'Anton and Ilya', 30, '2023-12-20', true),
    createLesson(71, 'Darya', 25, '2023-12-21', true),
    createLesson(72, 'Diana', 20, '2023-12-21', true),
    createLesson(73, 'Bogdana', 20, '2023-12-21', true),
    createLesson(74, 'Saveliy', 20, '2023-12-22', true),
    createLesson(75, 'Kirill Begun', 20, '2023-12-22', true),
    createLesson(76, 'Saveliy', 20, '2023-12-26', true),
    createLesson(77, 'Diana', 20, '2023-12-26', true),
    createLesson(78, 'Bogdana', 20, '2023-12-26', true),
    createLesson(79, 'Anton and Ilya', 30, '2023-12-27', true),
    createLesson(80, 'Diana', 20, '2023-12-27', true),
    createLesson(81, 'Bogdana', 20, '2023-12-28', true),
    createLesson(82, 'Kirill Begun', 20, '2023-12-29', true),
    createLesson(83, 'Saveliy', 20, '2023-12-29', true),
    createLesson(84, 'Anton and Ilya', 30, '2024-01-04', true),
    createLesson(85, 'Kirill Begun', 20, '2024-01-05', true),
    createLesson(86, 'Bogdana', 20, '2024-01-05', true),
    createLesson(87, 'Anton and Ilya', 30, '2024-01-08', true),
    createLesson(88, 'Diana', 20, '2024-01-08', true),
    createLesson(89, 'Saveliy', 20, '2024-01-09', true),
    createLesson(90, 'Bogdana', 20, '2024-01-09', true),
    createLesson(91, 'Anton and Ilya', 30, '2024-01-10', true),
    createLesson(92, 'Diana', 20, '2024-01-10', true),
    createLesson(93, 'Darya', 25, '2024-01-11', true),
    createLesson(94, 'Diana', 20, '2024-01-11', true),
    createLesson(95, 'Bogdana', 20, '2024-01-11', true),
    createLesson(96, 'Kirill Konoplitskiy', 20, '2024-01-12', true),
    createLesson(97, 'Anton and Ilya', 30, '2024-01-15', true),
    createLesson(98, 'Diana', 20, '2024-01-15', true),
    createLesson(99, 'Saveliy', 20, '2024-01-16', true),
    createLesson(100, 'Bogdana', 20, '2024-01-16', true),
    createLesson(101, 'Anton and Ilya', 30, '2024-01-17', true),
    createLesson(102, 'Diana', 20, '2024-01-17', true),
    createLesson(103, 'Darya', 25, '2024-01-18', true),
    createLesson(104, 'Diana', 20, '2024-01-18', true),
    createLesson(105, 'Bogdana', 20, '2024-01-18', true),
    createLesson(106, 'Kirill Begun', 20, '2024-01-19', true),
    createLesson(107, 'Anton and Ilya', 30, '2024-01-22', true),
    createLesson(108, 'Saveliy', 20, '2024-01-23', true),
    createLesson(109, 'Bogdana', 20, '2024-01-23', true),
    createLesson(110, 'Anton and Ilya', 30, '2024-01-24', true),
    createLesson(111, 'Diana', 20, '2024-01-24', true),
    createLesson(112, 'Darya', 25, '2024-01-25', true),
    createLesson(113, 'Diana', 20, '2024-01-25', true),
    createLesson(114, 'Bogdana', 20, '2024-01-25', true),
    createLesson(115, 'Kirill Begun', 20, '2024-01-26', true),
    createLesson(116, 'Diana', 20, '2024-01-29', true),
    createLesson(117, 'Saveliy', 20, '2024-01-30', true),
    createLesson(118, 'Bogdana', 20, '2024-01-30', true),
    createLesson(119, 'Diana', 20, '2024-01-31', true),
    createLesson(120, 'Darya', 25, '2024-02-01', true),
    createLesson(121, 'Diana', 20, '2024-02-01', true),
    createLesson(122, 'Bogdana', 20, '2024-02-01', true),
    createLesson(123, 'Kirill Begun', 20, '2024-02-02', true),
    createLesson(124, 'Anton and Ilya', 30, '2024-02-05', true),
    createLesson(125, 'Diana', 20, '2024-02-05', true),
    createLesson(126, 'Bogdana', 20, '2024-02-06', true),
    createLesson(127, 'Anton and Ilya', 30, '2024-02-07', true),
    createLesson(128, 'Kirill Begun', 20, '2024-02-07', true),
    createLesson(129, 'Diana', 20, '2024-02-07', true),
    createLesson(130, 'Darya', 25, '2024-02-08', true),
    createLesson(131, 'Bogdana', 20, '2024-02-08', true),
    createLesson(132, 'Diana', 20, '2024-02-08', true),
    createLesson(133, 'Kirill Konoplitskiy', 25, '2024-02-09', true),
    createLesson(134, 'Anton and Ilya', 20, '2024-02-12', true),
    createLesson(135, 'Bogdana', 20, '2024-02-13', true),
    createLesson(136, 'Darya', 25, '2024-02-15', true),
    createLesson(137, 'Kirill Konoplitskiy', 25, '2024-02-16', true),
    createLesson(138, 'Kirill Begun', 20, '2024-02-16', true),
    createLesson(139, 'Anton and Ilya', 30, '2024-02-19', true),
    createLesson(140, 'Diana', 20, '2024-02-19', true),
    createLesson(141, 'Bogdana', 20, '2024-02-20', true),
    createLesson(142, 'Anton and Ilya', 30, '2024-02-21', true),
    createLesson(143, 'Diana', 20, '2024-02-21', true),
    createLesson(144, 'Darya', 25, '2024-02-22', true),
    createLesson(145, 'Bogdana', 20, '2024-02-22', true),
    createLesson(146, 'Diana', 20, '2024-02-22', true),
    createLesson(147, 'Kirill Konoplitskiy', 25, '2024-02-23', true),
    createLesson(148, 'Kirill Begun', 20, '2024-02-23', true),
    createLesson(149, 'Anton and Ilya', 30, '2024-02-26', true),
    createLesson(150, 'Diana', 20, '2024-02-36', true),
    createLesson(151, 'Bogdana', 20, '2024-02-27', true),
    createLesson(152, 'Yaroslav', 25, '2024-02-27', true),
    createLesson(153, 'Kirill Konoplitskiy', 25, '2024-02-28', true),
    createLesson(154, 'Anton and Ilya', 30, '2024-02-28', true),
    createLesson(155, 'Diana', 20, '2024-02-28', true),
    createLesson(156, 'Bogdana', 20, '2024-02-28', true),
    createLesson(157, 'Darya', 25, '2024-02-29', true),
    createLesson(158, 'Diana', 20, '2024-02-29', true),
    createLesson(159, 'Kirill Begun', 20, '2024-03-01', true),
    createLesson(160, 'Anton and Ilya', 30, '2024-03-04', true),
    createLesson(161, 'Diana', 20, '2024-03-04', true),
    createLesson(162, 'Yaroslav', 25, '2024-03-04', true),
    createLesson(163, 'Saveliy', 25, '2024-03-05', true),
    createLesson(164, 'Bogdana', 20, '2024-03-05', true),
    createLesson(165, 'Kirill Konoplitskiy', 25, '2024-03-06', true),
    createLesson(166, 'Diana', 20, '2024-03-06', true),
    createLesson(167, 'Diana', 20, '2024-03-07', true),
    createLesson(168, 'Kirill Begun', 20, '2024-03-08', true),
    createLesson(169, 'Anton and Ilya', 30, '2024-03-11', true),
    createLesson(170, 'Diana', 20, '2024-03-11', true),
    createLesson(171, 'Saveliy', 25, '2024-03-12', true),
    createLesson(172, 'Kirill Konoplitskiy', 25, '2024-03-13', true),
    createLesson(173, 'Darya', 25, '2024-03-14', true),
    createLesson(174, 'Saveliy', 25, '2024-03-14', true),
    createLesson(175, 'Anton and Ilya', 30, '2024-03-18', true),
    createLesson(176, 'Diana', 20, '2024-03-18', true),
    createLesson(177, 'Saveliy', 25, '2024-03-19', true),
    createLesson(178, 'Bogdana', 20, '2024-03-19', true),
    createLesson(179, 'Kirill Konoplitskiy', 25, '2024-03-20', true),
    createLesson(180, 'Darya', 25, '2024-03-21', true),
    createLesson(181, 'Bogdana', 20, '2024-03-21', true),
    createLesson(182, 'Tihon', 40, '2024-03-22', true),
    createLesson(183, 'Kirill Begun', 25, '2024-03-22', true),
    createLesson(184, 'Anton and Ilya', 30, '2024-03-25', true),
    createLesson(185, 'Tihon', 40, '2024-03-26', true),
    createLesson(186, 'Kirill Konoplitskiy', 25, '2024-03-27', true),
    createLesson(187, 'Anton and Ilya', 20, '2024-03-27', true),
    createLesson(188, 'Kirill Konoplitskiy', 25, '2024-05-01', true),
    createLesson(189, 'Darya', 25, '2024-05-02', true),
    createLesson(190, 'Diana', 25, '2024-05-02', true),
    createLesson(191, 'Tihon', 40, '2024-05-04', true),
    createLesson(192, 'Diana', 25, '2024-05-06', true),
    createLesson(193, 'Saveliy', 25, '2024-05-07', true),
    createLesson(194, 'Vasilisa', 25, '2024-05-07', true),
    createLesson(195, 'Diana', 25, '2024-05-07', true),
    createLesson(196, 'Kirill Konoplitskiy', 25, '2024-05-08', true),
    createLesson(197, 'Vasilisa', 25, '2024-05-08', true),
    createLesson(198, 'Diana', 25, '2024-05-08', true),
    createLesson(199, 'Kirill Begun', 25, '2024-05-09', true),
    createLesson(200, 'Saveliy', 25, '2024-05-15', true),
    createLesson(201, 'Kirill Konoplitskiy', 25, '2024-05-15', true),
    createLesson(202, 'Kirill Begun', 25, '2024-05-15', true),
    createLesson(203, 'Vasilisa', 25, '2024-05-15', true),
    createLesson(204, 'Diana', 25, '2024-05-15', true),
    createLesson(205, 'Saveliy', 25, '2024-05-16', true),
    createLesson(206, 'Darya', 25, '2024-05-16', true),
    createLesson(207, 'Diana', 25, '2024-05-16', true),
    createLesson(208, 'Bogdana', 25, '2024-05-16', true),
    createLesson(209, 'Diana', 25, '2024-05-18', true),
    createLesson(210, 'Diana', 25, '2024-05-20', true),
    createLesson(211, 'Saveliy', 25, '2024-05-21', true),
    createLesson(212, 'Vasilisa', 25, '2024-05-21', true),
    createLesson(213, 'Bogdana', 25, '2024-05-21', true),
    createLesson(214, 'Kirill Konoplitskiy', 25, '2024-05-22', true),
    createLesson(215, 'Kirill Begun', 25, '2024-05-22', true),
    createLesson(216, 'Tihon', 40, '2024-05-22', true),
    createLesson(217, 'Darya', 25, '2024-05-23', true),
    createLesson(218, 'Diana', 25, '2024-05-27', true),
    createLesson(219, 'Kirill Konoplitskiy', 25, '2024-05-29', true),
    createLesson(220, 'Kirill Begun', 25, '2024-05-29', true),
    createLesson(221, 'Kirill Begun', 25, '2024-06-04', true),
    createLesson(222, 'Tihon', 40, '2024-06-04', true),
    createLesson(223, 'Tihon', 40, '2024-06-06', true),
    createLesson(224, 'Tihon', 40, '2024-06-08', true),
    createLesson(225, 'Tihon', 40, '2024-06-11', true),
    createLesson(226, 'Kirill Begun', 25, '2024-06-11', true),
    createLesson(227, 'Tihon', 40, '2024-06-13', true),
    createLesson(228, 'Tihon', 40, '2024-06-15', true),
    createLesson(229, 'Tihon', 40, '2024-06-17', true),
    createLesson(230, 'Tihon', 40, '2024-06-18', true),
    createLesson(231, 'Kirill Begun', 25, '2024-06-18', true),
    createLesson(232, 'Tihon', 40, '2024-06-24', true),
    createLesson(233, 'Tihon', 40, '2024-06-26', true),
    createLesson(234, 'Tihon', 40, '2024-06-28', true),
    createLesson(235, 'Tihon', 40, '2024-07-09', true),
    createLesson(236, 'Tihon', 40, '2024-07-18', true),
    createLesson(237, 'Tihon', 40, '2024-07-20', true),
    createLesson(238, 'Tihon', 40, '2024-07-22', true),
    createLesson(239, 'Tihon', 40, '2024-07-24', true),
    createLesson(240, 'Fedor', 30, '2024-07-29', true),
    createLesson(241, 'Tihon', 40, '2024-07-29', true),
    createLesson(242, 'Tihon', 40, '2024-07-31', true),
    createLesson(243, 'Fedor', 30, '2024-07-31', true),
    createLesson(244, 'Saveliy', 30, '2024-08-01', true),
    createLesson(245, 'Tihon', 40, '2024-08-02', true),
    createLesson(246, 'Fedor', 30, '2024-08-02', true),
    createLesson(247, 'Tihon', 40, '2024-08-05', true),
    createLesson(248, 'Fedor', 30, '2024-08-05', true),
    createLesson(249, 'Saveliy', 30, '2024-08-05', true),
    createLesson(250, 'Saveliy', 30, '2024-08-06', true),
    createLesson(251, 'Tihon', 40, '2024-08-07', true),
    createLesson(252, 'Fedor', 30, '2024-08-07', true),
    createLesson(253, 'Tihon', 40, '2024-08-09', true),
    createLesson(254, 'Tihon', 40, '2024-08-12', true),
    createLesson(255, 'Fedor', 30, '2024-08-12', true),
    createLesson(256, 'Saveliy', 30, '2024-08-12', true),
    createLesson(257, 'Tihon', 40, '2024-08-14', true),
    createLesson(258, 'Fedor', 30, '2024-08-14', true),
    createLesson(259, 'Saveliy', 30, '2024-08-14', true),
    createLesson(260, 'Tihon', 40, '2024-08-16', true),
    createLesson(261, 'Fedor', 30, '2024-08-16', true),
    createLesson(262, 'Tihon', 40, '2024-08-19', true),
    createLesson(263, 'Fedor', 30, '2024-08-19', true),
    createLesson(264, 'Saveliy', 30, '2024-08-19', true),
    createLesson(265, 'Tihon', 40, '2024-08-21', true),
    createLesson(266, 'Fedor', 30, '2024-08-21', true),
    createLesson(267, 'Saveliy', 30, '2024-08-21', true),
    createLesson(268, 'Fedor', 30, '2024-08-23', true),
    createLesson(269, 'Fedor', 30, '2024-08-26', true),
    createLesson(270, 'Saveliy', 30, '2024-08-26', true),
    createLesson(271, 'Fedor', 30, '2024-08-28', true),
    createLesson(272, 'Fedor', 30, '2024-08-30', true),
    createLesson(273, 'Kirill Begun', 30, '2024-09-04', true),
    createLesson(274, 'Kirill Begun', 30, '2024-09-11', true),
    createLesson(275, 'Daniil Shaduyko', 30, '2024-09-14', false),
    createLesson(276, 'Vasilisa', 30, '2024-09-17', false),
    createLesson(277, 'Darya', 30, '2024-09-18', false),
    createLesson(278, 'Kirill Begun', 30, '2024-09-18', true),
];






