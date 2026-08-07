import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

pdf_path = os.path.join("public", "IEEE_Xyberox_Report_Final.pdf")
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()
normal = styles['Normal']

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=16,
    leading=20,
    alignment=1,
    textColor=colors.HexColor('#0f172a'),
    spaceAfter=12
)

author_style = ParagraphStyle(
    'AuthorStyle',
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=13,
    alignment=1,
    textColor=colors.HexColor('#334155'),
    spaceAfter=4
)

affil_style = ParagraphStyle(
    'AffilStyle',
    fontName='Helvetica-Oblique',
    fontSize=9,
    leading=11,
    alignment=1,
    textColor=colors.HexColor('#64748b'),
    spaceAfter=14
)

abstract_style = ParagraphStyle(
    'AbstractStyle',
    fontName='Helvetica-Oblique',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#1e293b'),
    spaceAfter=10
)

heading_style = ParagraphStyle(
    'HeadingStyle',
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    textColor=colors.HexColor('#0284c7'),
    spaceBefore=12,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'BodyStyle',
    fontName='Helvetica',
    fontSize=9.5,
    leading=13.5,
    textColor=colors.HexColor('#334155'),
    spaceAfter=8
)

story = []

# Title
story.append(Paragraph("Xyberox: An Edge Computing Autonomous Ground Vehicle Utilizing Low-Power Multi-Threaded Machine Vision and Dynamic Sensor Fusion for Real-Time Threat Mitigation", title_style))

# Authors
story.append(Paragraph("Shrabon Das &bull; Nijum Barua &bull; Mohd Ashraful Islam &bull; S M Mahadi Bhuiyan &bull; Fahim Faisal &bull; Elora Sharmin Khan", author_style))
story.append(Paragraph("Department of Computer Science & Engineering, Independent University, Bangladesh, Dhaka, Bangladesh", affil_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceAfter=12))

# Abstract
abstract_text = "<b>Abstract</b>—Autonomous mobile robots increasingly require real time perception, navigation, and human-robot interaction while operating under limited computational and power resources. This paper presents Xyberox, an edge-computing autonomous ground vehicle designed to perform machine vision, sensor fusion, navigation control, and human-robot interaction locally without depending on continuous cloud connectivity. The system uses a Raspberry Pi Zero 2 W as its primary processing platform and combines a CSI camera, MPU-9250 inertial measurement unit, ultrasonic distance sensing, a round GC9A01 display, and an I2S-based audio interface. A multi-threaded Python software architecture separates vision, telemetry, motor control, display, and audio operations to support concurrent processing. A hardware-isolated power distribution approach is also incorporated to reduce the effect of motor-induced electrical disturbances on digital communication and computing components. The reported experimental evaluation demonstrates an edge vision latency of 28 ms per frame with approximately 30 frames per second tracking, voltage fluctuation below &plusmn;0.08 V on the logic power bus during motor switching, and angular path deviation below 1.8 degrees over a 10-meter straight-line test."
story.append(Paragraph(abstract_text, abstract_style))

story.append(Paragraph("<b>Index Terms</b>—Autonomous ground vehicle, edge computing, edge AI, machine vision, sensor fusion, multi-threading, Raspberry Pi, embedded robotics, human-robot interaction, autonomous navigation.", body_style))
story.append(Spacer(1, 10))

# Sections
story.append(Paragraph("I. INTRODUCTION", heading_style))
story.append(Paragraph("Autonomous ground vehicles are increasingly being developed for inspection, monitoring, assistance, navigation, and other environments where rapid local decision-making is important. Conventional robotic systems may rely on remote servers or cloud computing for computationally intensive perception and decision-making. Although cloud-based architectures provide substantial computational resources, they can introduce communication latency, network dependency, and privacy or security concerns.", body_style))
story.append(Paragraph("Edge computing provides an alternative approach by moving computation closer to the physical system. Instead of continuously transferring sensor data to a remote server, an edge device can process information locally and generate control decisions at the robot itself. Xyberox was developed around this principle, using a Raspberry Pi Zero 2 W as its central computing platform.", body_style))

story.append(Paragraph("II. LITERATURE REVIEW & RELATED WORK", heading_style))
story.append(Paragraph("Research on edge computing in robotics emphasizes local computation for applications requiring responsive perception and control. Machine vision is one of the most computationally demanding functions in small autonomous robots. Xyberox applies an integer-quantized TensorFlow Lite model to support local visual tracking, maintaining approximately 30 FPS.", body_style))

story.append(Paragraph("III. SYSTEM DESIGN & HARDWARE SPECIFICATIONS", heading_style))
story.append(Paragraph("The hardware system separates high-current motor actuation from sensitive digital logic using an 11.1V 3S LiPo battery with an HW-411A adjustable buck converter regulating a stable 5.0V logic bus.", body_style))

# Hardware Spec Table (Table II)
table_data = [
    ["Subsystem", "Component", "Primary Specification"],
    ["Computing Core", "Raspberry Pi Zero 2 W", "64-bit quad-core ARM Cortex-A53 CPU, 512 MB RAM"],
    ["Storage", "MicroSD Card", "32 GB / 64 GB Class 10 storage"],
    ["Vision", "Pi Zero CSI Camera", "5 MP camera connected via CSI ribbon interface"],
    ["Visual HRI", "GC9A01 Display", "1.28-inch, 240x240 RGB circular LCD, SPI interface"],
    ["Audio HRI", "MAX98357A + Speaker", "I2S Class-D mono amplifier with 3 W 8-ohm speaker"],
    ["Actuation", "Yellow TT Motors", "Four brushed DC motors with L298N H-Bridge driver"],
    ["Power", "3S LiPo + HW-411A", "11.1 V 2200 mAh battery with adjustable buck converter"],
    ["Telemetry", "MPU-9250 + HC-SR04", "9-axis IMU sensor and ultrasonic distance sensing"]
]

t = Table(table_data, colWidths=[110, 150, 270])
t.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0284c7')),
    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
    ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,0), 9),
    ('BOTTOMPADDING', (0,0), (-1,0), 6),
    ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
    ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
    ('FONTSIZE', (0,1), (-1,-1), 8.5),
    ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f8fafc')])
]))
story.append(t)
story.append(Spacer(1, 12))

story.append(Paragraph("IV. EXPERIMENTAL TEST DATA & RESULTS", heading_style))

# Test Data Table (Table III)
test_data = [
    ["Test Parameter", "Observed Value", "Evaluation"],
    ["Vision Processing Latency", "28 ms / frame", "Responsive Local Edge AI"],
    ["Visual Tracking Rate", "~30 FPS", "Real-time Smooth Perception"],
    ["Logic Power Bus Fluctuation", "< +-0.08 V", "Stable Motor Isolation"],
    ["Angular Path Deviation", "< 1.8 degrees", "Consistent Trajectory Control"],
    ["Straight-Line Traversal Test", "10 Meters", "Successful Autonomous Navigation"]
]

t_test = Table(test_data, colWidths=[170, 160, 200])
t_test.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0f172a')),
    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
    ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,0), 9),
    ('BOTTOMPADDING', (0,0), (-1,0), 6),
    ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
    ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
    ('FONTSIZE', (0,1), (-1,-1), 8.5),
    ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f1f5f9')])
]))
story.append(t_test)
story.append(Spacer(1, 12))

story.append(Paragraph("V. CONCLUSION & FUTURE WORK", heading_style))
story.append(Paragraph("This paper presented Xyberox, a compact autonomous ground vehicle based on edge computing, multi-threaded processing, machine vision, sensor fusion, and human-robot interaction. The reported evaluation achieved 28 ms per frame for edge vision processing and approximately 30 FPS tracking. The logic power bus maintained voltage fluctuation below &plusmn;0.08 V during motor switching, while the navigation test reported angular deviation below 1.8 degrees over a 10-meter straight-line path.", body_style))

doc.build(story)
print("Successfully generated IEEE PDF at:", pdf_path)
