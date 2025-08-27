export interface TargetGroup {
  options: string[];
  selected: string;
}

export interface ExperienceLevel {
  options: string[];
  selected: string;
}

export interface MeetingFormat {
  options: string[];
  selected: string;
}

export interface MeetingFrequency {
  options: string[];
  selected: string;
}

export interface MeetingStructure {
  options: string[];
  selected: string;
}

export interface Meetings {
  format: MeetingFormat;
  frequency: MeetingFrequency;
  duration_minutes: number;
  structure: MeetingStructure;
}

export interface ApplicationMethod {
  options: string[];
  selected: string;
}

export interface Application {
  method: ApplicationMethod;
  fields: string[];
}

export interface Example {
  name: string;
  focus: string;
  about: string;
}

export interface MastermindGroup {
  title: string;
  goal: string;
  target_group: TargetGroup;
  experience_level: ExperienceLevel;
  group_size: number;
  meetings: Meetings;
  commitment: string[];
  start: string;
  application: Application;
  example: Example;
}
