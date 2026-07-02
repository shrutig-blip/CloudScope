const diagnoses = {

traffic:{

issue:"Traffic Spike",

health:72,

status:"Moderate Risk",

service:"Amazon SQS",

reason:"Amazon SQS buffers sudden bursts of traffic and prevents requests from being lost.",

alternative:"Amazon Kinesis",

architecture:[
" Client",
" API Gateway",
" Amazon SQS",
" Lambda Workers",
" DynamoDB"
],

bestPractices:[
"Configure Dead Letter Queue",
"Enable Auto Scaling",
"Monitor Queue Depth",
"Create CloudWatch Alarms"
]

},

website:{

issue:"High Latency",

health:61,

status:"Needs Optimization",

service:"Amazon CloudFront",

reason:"CloudFront caches static assets closer to users, reducing latency worldwide.",

alternative:"Amazon Global Accelerator",

architecture:[
" User",
" CloudFront",
" Amazon S3"
],

bestPractices:[
"Enable Compression",
"Cache Static Assets",
"Use HTTPS",
"Optimize Images"
]

},

orders:{

issue:"Lost Orders",

health:48,

status:"Critical",

service:"Amazon SQS",

reason:"Queues ensure every order is processed even during failures.",

alternative:"Amazon EventBridge",

architecture:[
" Checkout",
" Amazon SQS",
" Lambda",
" Payment",
" Database"
],

bestPractices:[
"Retry Failed Messages",
"Enable DLQ",
"Idempotent Processing",
"CloudWatch Alerts"
]

},

notifications:{

issue:"Notification System",

health:84,

status:"Healthy",

service:"Amazon SNS",

reason:"SNS delivers notifications instantly to multiple subscribers.",

alternative:"Amazon SES",

architecture:[
" Lambda",
" Amazon SNS",
" Email",
" SMS"
],

bestPractices:[
"Use Topic Filtering",
"Retry Delivery",
"Encrypt Messages",
"Monitor Delivery Status"
]

},

logs:{

issue:"Missing Monitoring",

health:56,

status:"Needs Monitoring",

service:"Amazon CloudWatch",

reason:"CloudWatch collects logs, metrics and alarms in one place.",

alternative:"AWS X-Ray",

architecture:[
" Application",
" CloudWatch",
" Alarm"
],

bestPractices:[
"Create Dashboards",
"Monitor CPU",
"Monitor Memory",
"Enable Log Retention"
]

},

storage:{

issue:"Storage Scaling",

health:79,

status:"Stable",

service:"Amazon S3",

reason:"S3 provides durable and highly scalable object storage.",

alternative:"Amazon EFS",

architecture:[
" User",
" Amazon S3",
" Cloud"
],

bestPractices:[
"Enable Versioning",
"Lifecycle Rules",
"Server-side Encryption",
"Block Public Access"
]

}

}