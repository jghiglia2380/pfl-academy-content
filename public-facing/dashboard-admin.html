<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - PFL Academy</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f9fafb;
        }

        .dashboard-card {
            transition: all 0.3s ease;
        }

        .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Toggle Switch */
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 24px;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 24px;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .toggle-slider {
            background-color: #4f46e5;
        }

        input:checked + .toggle-slider:before {
            transform: translateX(24px);
        }

        /* Modal Styles */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .modal.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background-color: white;
            border-radius: 0.5rem;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }

        .modal.active .modal-content {
            transform: translateY(0);
        }
        
        /* Grade weight slider */
        .weight-slider {
            appearance: none;
            height: 8px;
            border-radius: 4px;
            background: #e5e7eb;
            outline: none;
        }
        
        .weight-slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #4f46e5;
            cursor: pointer;
        }
        
        /* Grid layout for weight matrix */
        .grid-cols-6 {
            grid-template-columns: 2fr repeat(5, 1fr);
        }
    </style>
</head>
<body>
    <!-- Header Section (Sticky) -->
    <header class="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="flex justify-center items-center h-10 w-10 rounded bg-indigo-600 text-white font-bold">
                            PFL
                        </div>
                        <span class="ml-3 text-xl font-bold text-gray-900">PFL Academy</span>
                    </div>
                    <nav class="hidden md:flex items-center space-x-8 ml-10">
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Home</a>
                        <a href="/static-build/standards.html" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Curriculum</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Users</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">Analytics</a>
                        <a href="#" class="text-gray-700 font-medium hover:text-indigo-600 text-sm">System</a>
                    </nav>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center text-gray-700">
                        <span class="hidden md:inline-block mr-2 text-sm">Admin User</span>
                        <div class="relative">
                            <button class="flex items-center justify-center rounded-full bg-gray-100 h-8 w-8 focus:outline-none">
                                <span class="text-sm font-medium text-gray-800">AU</span>
                            </button>
                        </div>
                    </div>
                    <a href="#" class="hidden md:block ml-6 text-sm text-gray-700 hover:text-indigo-600">Logout</a>
                    <button class="ml-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Dashboard Header -->
    <div class="bg-white py-8 px-4 shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:truncate">Admin Dashboard</h1>
                    <p class="mt-2 text-gray-600">Configure assessment weights, manage permissions, and control curriculum settings.</p>
                </div>
                <div class="mt-4 md:mt-0 md:ml-4 flex space-x-3">
                    <div class="relative">
                        <button id="settingsButton" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                            Settings
                        </button>
                    </div>
                    <button id="saveConfigButton" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Save Configuration
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Dashboard Content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <!-- Navigation Tabs -->
        <div class="mb-5 border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="#" class="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Grade Weighting
                </a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Teacher Permissions
                </a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Curriculum Config
                </a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Assessment Library
                </a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Reporting & Analytics
                </a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    System Settings
                </a>
            </nav>
        </div>
        
        <!-- Section 1: Grade Weighting System -->
        <section class="mb-10" id="grade-weighting-section">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-lg font-medium text-gray-900">Grade Weighting System</h2>
                <div class="flex items-center space-x-3">
                    <select class="rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="all">All Standards</option>
                        <option value="1">Standard 1: Careers</option>
                        <option value="2">Standard 2: Taxes</option>
                        <option value="3">Standard 3: Banking</option>
                        <option value="15">Standard 15: Career Readiness</option>
                    </select>
                    <button class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        Configure Presets
                    </button>
                </div>
            </div>

            <!-- Grade Weighting Matrix -->
            <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                <div class="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                    <h3 class="text-md leading-6 font-medium text-gray-900">Assessment Type Weighting Matrix</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Configure weights for different assessment types across all standards.</p>
                </div>
                <div class="p-6">
                    <!-- Global Controls -->
                    <div class="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                        <div>
                            <div class="flex items-center mb-2">
                                <label class="mr-2 text-sm font-medium text-gray-700">Enable Global Defaults</label>
                                <label class="toggle-switch">
                                    <input type="checkbox" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <p class="text-xs text-gray-500">When enabled, these weights will apply to all standards that don't have custom overrides.</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button class="text-sm text-indigo-600 hover:text-indigo-900 font-medium">Reset to Defaults</button>
                            <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply to All Standards
                            </button>
                        </div>
                    </div>

                    <!-- Matrix Grid -->
                    <div class="grid grid-cols-6 gap-4 mb-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-2">
                        <div>Assessment Type</div>
                        <div class="text-center">Quizzes</div>
                        <div class="text-center">Projects</div>
                        <div class="text-center">Skill Builders</div>
                        <div class="text-center">Participation</div>
                        <div class="text-center">Final Assessment</div>
                    </div>

                    <!-- Standard 1 Row -->
                    <div class="grid grid-cols-6 gap-4 py-4 border-b border-gray-200 items-center">
                        <div class="flex items-center justify-between">
                            <span class="font-medium text-gray-900">Standard 1: Careers</span>
                            <label class="toggle-switch ml-2">
                                <input type="checkbox">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="20">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">20%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="30">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">30%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="25">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">25%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="5">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">5%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="20">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">20%</div>
                        </div>
                    </div>

                    <!-- Standard 2 Row -->
                    <div class="grid grid-cols-6 gap-4 py-4 border-b border-gray-200 items-center">
                        <div class="flex items-center justify-between">
                            <span class="font-medium text-gray-900">Standard 2: Taxes</span>
                            <label class="toggle-switch ml-2">
                                <input type="checkbox" checked>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="25">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">25%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="20">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">20%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="30">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">30%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="5">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">5%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="20">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">20%</div>
                        </div>
                    </div>

                    <!-- Standard 15 Row -->
                    <div class="grid grid-cols-6 gap-4 py-4 border-b border-gray-200 items-center">
                        <div class="flex items-center justify-between">
                            <span class="font-medium text-gray-900">Standard 15: Career Readiness</span>
                            <label class="toggle-switch ml-2">
                                <input type="checkbox" checked>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="15">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">15%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="35">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">35%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="30">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">30%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="10">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">10%</div>
                        </div>
                        <div class="text-center">
                            <input type="range" class="weight-slider w-full" min="0" max="100" value="10">
                            <div class="mt-1 text-center text-xs font-medium text-gray-900">10%</div>
                        </div>
                    </div>

                    <!-- Minimum/Maximum Value Controls -->
                    <div class="mt-6 pt-4 border-t border-gray-200">
                        <h4 class="text-sm font-medium text-gray-900 mb-4">Global Minimum/Maximum Constraints</h4>
                        <div class="grid grid-cols-3 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Quizzes</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" min="0" max="100" value="10" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">to</span>
                                    <input type="number" min="0" max="100" value="40" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">%</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Projects</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" min="0" max="100" value="15" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">to</span>
                                    <input type="number" min="0" max="100" value="50" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">%</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Skill Builders</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" min="0" max="100" value="20" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">to</span>
                                    <input type="number" min="0" max="100" value="45" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-20 sm:text-sm border-gray-300 rounded-md">
                                    <span class="text-gray-500">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Class-Specific Overrides -->
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-md leading-6 font-medium text-gray-900">Class-Specific Overrides</h3>
                            <p class="mt-1 max-w-2xl text-sm text-gray-500">Enable specific teachers to customize weighting for their classes.</p>
                        </div>
                        <button class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-0.5 mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            Add Override
                        </button>
                    </div>
                </div>
                <div class="bg-white overflow-hidden">
                    <ul role="list" class="divide-y divide-gray-200">
                        <li>
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <span class="text-sm font-medium text-indigo-800">JT</span>
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">John Teacher</div>
                                            <div class="text-sm text-gray-500">Period 3 - Financial Literacy</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Approved
                                        </span>
                                        <div class="flex space-x-2">
                                            <button class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">View</button>
                                            <button class="text-gray-500 hover:text-gray-700 text-sm font-medium">Revoke</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                    <div class="text-sm text-gray-500">
                                        <span>Customized weights for Standards 1, 2, and 15</span>
                                    </div>
                                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                        </svg>
                                        <span>Approved on <time datetime="2023-01-13">Jan 13, 2025</time></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <span class="text-sm font-medium text-green-800">AT</span>
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">Angela Thompson</div>
                                            <div class="text-sm text-gray-500">Period 1 - Financial Literacy</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                        <div class="flex space-x-2">
                                            <button class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Review</button>
                                            <button class="text-red-600 hover:text-red-900 text-sm font-medium">Deny</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                    <div class="text-sm text-gray-500">
                                        <span>Requesting custom weights for Standard 15</span>
                                    </div>
                                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                        </svg>
                                        <span>Requested on <time datetime="2023-03-30">Mar 30, 2025</time></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Teacher Permissions Management (Hidden by default) -->
        <section class="hidden mb-10" id="teacher-permissions-section">
            <!-- Content for Teacher Permissions Management would go here -->
        </section>

        <!-- Curriculum Configuration (Hidden by default) -->
        <section class="hidden mb-10" id="curriculum-config-section">
            <!-- Content for Curriculum Configuration would go here -->
        </section>

        <!-- Assessment Library (Hidden by default) -->
        <section class="hidden mb-10" id="assessment-library-section">
            <!-- Content for Assessment Library would go here -->
        </section>

        <!-- Reporting & Analytics (Hidden by default) -->
        <section class="hidden mb-10" id="reporting-analytics-section">
            <!-- Content for Reporting & Analytics would go here -->
        </section>

        <!-- System Settings (Hidden by default) -->
        <section class="hidden mb-10" id="system-settings-section">
            <!-- Content for System Settings would go here -->
        </section>
    </main>

    <!-- Weight Preset Configuration Modal -->
    <div id="weightPresetModal" class="modal">
        <div class="modal-content p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-medium text-gray-900">Configure Weight Presets</h3>
                <button id="closeWeightPresetModal" class="text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="space-y-6">
                <div>
                    <h4 class="text-sm font-medium text-gray-900 mb-3">Saved Presets</h4>
                    <ul class="bg-gray-50 rounded-md divide-y divide-gray-200">
                        <li class="p-4 flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-gray-900">Standard Distribution</p>
                                <p class="text-xs text-gray-500">Quizzes: 25%, Projects: 25%, Skill Builders: 25%, Participation: 5%, Final: 20%</p>
                            </div>
                            <div class="flex space-x-2">
                                <button class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Apply</button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm font-medium">Edit</button>
                            </div>
                        </li>
                        <li class="p-4 flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-gray-900">Project Focus</p>
                                <p class="text-xs text-gray-500">Quizzes: 15%, Projects: 40%, Skill Builders: 30%, Participation: 5%, Final: 10%</p>
                            </div>
                            <div class="flex space-x-2">
                                <button class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Apply</button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm font-medium">Edit</button>
                            </div>
                        </li>
                        <li class="p-4 flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-gray-900">Assessment Focus</p>
                                <p class="text-xs text-gray-500">Quizzes: 30%, Projects: 20%, Skill Builders: 20%, Participation: 5%, Final: 25%</p>
                            </div>
                            <div class="flex space-x-2">
                                <button class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Apply</button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm font-medium">Edit</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-medium text-gray-900 mb-3">Create New Preset</h4>
                    <div class="space-y-4 bg-gray-50 p-4 rounded-md">
                        <div>
                            <label for="presetName" class="block text-sm font-medium text-gray-700 mb-1">Preset Name</label>
                            <input type="text" id="presetName" name="presetName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        <div class="grid grid-cols-5 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Quizzes</label>
                                <input type="number" min="0" max="100" value="20" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Projects</label>
                                <input type="number" min="0" max="100" value="30" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Skill Builders</label>
                                <input type="number" min="0" max="100" value="25" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Participation</label>
                                <input type="number" min="0" max="100" value="5" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Final</label>
                                <input type="number" min="0" max="100" value="20" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                        <div class="pt-2">
                            <p class="text-xs text-gray-500">Total: <span id="totalPercentage">100</span>%</p>
                        </div>
                        <div class="pt-2 flex justify-end">
                            <button class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save Preset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Tab navigation
        const tabs = document.querySelectorAll('nav[aria-label="Tabs"] a');
        const sections = [
            document.getElementById('grade-weighting-section'),
            document.getElementById('teacher-permissions-section'),
            document.getElementById('curriculum-config-section'),
            document.getElementById('assessment-library-section'),
            document.getElementById('reporting-analytics-section'),
            document.getElementById('system-settings-section')
        ];

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update tab styles
                tabs.forEach(t => {
                    t.classList.remove('border-indigo-500', 'text-indigo-600');
                    t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                });
                
                tab.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                tab.classList.add('border-indigo-500', 'text-indigo-600');
                
                // Show correct section
                sections.forEach(section => {
                    section.classList.add('hidden');
                });
                
                sections[index].classList.remove('hidden');
            });
        });

        // Modal functionalities
        const weightPresetModal = document.getElementById('weightPresetModal');
        const closeWeightPresetModal = document.getElementById('closeWeightPresetModal');
        
        // Weight preset modal
        document.querySelector('button:has(svg[viewBox="0 0 20 20"])').addEventListener('click', () => {
            weightPresetModal.classList.add('active');
        });
        
        closeWeightPresetModal.addEventListener('click', () => {
            weightPresetModal.classList.remove('active');
        });

        // Update weight percentage displays when sliders change
        const weightSliders = document.querySelectorAll('.weight-slider');
        weightSliders.forEach(slider => {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                e.target.nextElementSibling.textContent = `${value}%`;
            });
        });

        // Demo save functionality
        document.getElementById('saveConfigButton').addEventListener('click', () => {
            // Simulate saving
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
            notification.textContent = 'Configuration saved successfully!';
            document.body.appendChild(notification);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
    </script>
</body>
</html>