export type ProjectType = 'Web sitesi' | 'Özel yazılım' | 'Otomasyon sistemi' | 'Mevcut siteyi yenileme' | 'Henüz emin değilim'

export type ProjectGoal = 
  | 'Daha fazla müşteri almak' 
  | 'Daha profesyonel görünmek' 
  | 'İş süreçlerini kolaylaştırmak' 
  | 'Satış / başvuru toplamak' 
  | 'İç sistemi düzenlemek'

export type BudgetRange = 
  | '10.000 TL altı' 
  | '10.000 - 25.000 TL' 
  | '25.000 - 50.000 TL' 
  | '50.000 TL üzeri' 
  | 'Henüz net değil'

export type StartTime = 'Hemen' | 'Bu hafta' | 'Bu ay' | 'Daha sonra'

export interface LeadData {
  project_type?: ProjectType
  project_description?: string
  project_goal?: ProjectGoal
  budget_range?: BudgetRange
  start_time?: StartTime
  full_name?: string
  phone?: string
  email?: string
  source?: string
}

export interface Message {
  id: string
  role: 'bot' | 'user'
  content: string | React.ReactNode
  timestamp: number
}
